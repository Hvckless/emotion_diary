


/**
 * AES 암호에 사용되는 키를 생성하는 함수
 * 초기화 벡터 요구 스펙에 맞춰 12자리의 8비트 숫자를 생성한다
 * @returns {Uint8Array[12]}
 */
const generateRandomBytes = async ()=>{
    return await crypto.getRandomValues(new Uint8Array(12));
}

/**
 * 사용자 데이터를 암호화하여 ArrayBuffer형식으로 반환한다
 * @param {Uint8Array[32]} key 암호화에 사용되는 256비트 키 (AlphaKey를 해싱하여 사용)
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @param {String} data 사용자 데이터 원문
 * @returns {Uint8Array} 암호화된 사용자 데이터
 */
const encryptWithAESGCM = async (key, iv, data)=>{
    const encryptedData = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        data
    );
    return encryptedData
}

/**
 * 사용자 데이터를 복호화하여 반환한다
 * @param {Uint8Array[32]} key 암호화에 사용되는 256비트 키 (AlphaKey를 해싱하여 사용)
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @param {Uint8Array} encryptedData 암호화된 사용자 데이터
 * @returns 복호화된 사용자 데이터 원문
 */
const decryptWithAESGCM = async (key, iv, encryptedData)=>{
    const decryptedData = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        encryptedData
    );
    return decryptedData;
}

/**
 * (서버측 코드 구현) 사용자 비밀번호와 개인 벡터로 개인 AlphaKey를 암호화
 * @param {String} userPassword 사용자 입력 비밀번호
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @param {Uint8Array[12]} alphaKey 서버측에서 발급하는 사용자 개인화된 AlphaKey
 * @returns 암호화된 AlphaKey
 */
const encryptAlphaKey = async (userPassword, iv, alphaKey)=>{
    return await encryptWithAESGCM(await importAlphaKey(userPassword), await iv, await alphaKey);
}

/**
 * 
 * @param {String} userPassword 사용자 비밀번호
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @param {Uint8Array[]} encryptedAlphaKey 서버로부터 수신받은 암호화된 사용자 전용 비밀키
 * @returns 복호화된 사용자 전용 비밀키
 */
const decryptAlphaKey = async (userPassword, iv, encryptedAlphaKey)=>{
    return decryptWithAESGCM(await importAlphaKey(userPassword), await iv, await encryptedAlphaKey);
}

/**
 * 
 * @param {String} betaData 사용자의 실제 데이터 원문
 * @param {Uint8Array[12]} alphaKey 서버에서 발급한 해당 사용자 전용 비밀키
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @returns 암호화된 데이터 전문
 */
const encryptBeta = async (betaData, alphaKey, iv)=>{
    return encryptWithAESGCM(await importAlphaKey(alphaKey), await iv, await betaData);
}

/**
 * 
 * @param {String} encryptedBeta 서버로부터 받은 사용자의 암호화된 데이터 원문
 * @param {Uint8Array[12]} alphaKey 서버에서 발급한 해당 사용자 전용 비밀키
 * @param {Uint8Array[12]} iv 서버에서 발급한 해당 사용자 전용 무결성 검증 벡터
 * @returns 평문화된 데이터 전문
 */
const decryptBeta = async (encryptedBeta, alphaKey, iv)=>{
    return decryptWithAESGCM(await importAlphaKey(alphaKey), await iv, await encryptedBeta);
}

/**
 * 
 * @param {String} password 비밀번호 원문 (사용자 비밀번호 x)
 * @returns SHA-256으로 해싱된 비밀번호
 */
const hashingkey = async (password)=>{
    return await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
}

/**
 * 
 * @param {Uint8Array} key 128 혹은 256 bit ArrayBuffer
 * @returns 
 */
const importAlphaKey = async (key)=>{
    const aesKey = await crypto.subtle.importKey(
        "raw",
        key,
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"]
    );

    return aesKey;
}

/**
 * 
 * @param {String} string 문자열 형식으로 존재하는 ArrayBuffer
 * @returns {Uint8Array} ArrayBuffer
 */
const importArrayBuffer = async (string)=>{
    return await new Uint8Array(string.split(",").map(Number));
}

/**
 * 
 * @param {Uint8Array} arraybuffer ArrayBuffer
 * @returns {String} 문자열 형식으로 존재하는 ArrayBuffer
 */
const exportArrayBuffer = (arraybuffer)=>{
    return Array.from(new Uint8Array(arraybuffer)).join(",");
}









document.getElementById("generate-alpha-key").addEventListener("click", async () => {
    const alphaKey = await generateRandomBytes();
    document.getElementById("alpha-key-output").value = await exportArrayBuffer(alphaKey);
});

document.getElementById("encrypt-alpha-key").addEventListener("click", async () => {
    const password = document.getElementById("alpha-password").value;
    const iv = importArrayBuffer(document.getElementById("alpha-iv").value);
    const alphaKey = importArrayBuffer(document.getElementById("alpha-key-output").value);

    const hashedUserPasswordBuffer = await hashingkey(password);
    const hashedUserPasswordUint8Array = await new Uint8Array(hashedUserPasswordBuffer);
    
    const encryptedAlphaKey = await encryptAlphaKey(hashedUserPasswordUint8Array, iv, alphaKey);
    document.getElementById("alpha-key-output").value = exportArrayBuffer(encryptedAlphaKey);
});

document.getElementById("decrypt-alpha-key").addEventListener("click", async () => {
    const password = document.getElementById("alpha-password").value;
    const iv = importArrayBuffer(document.getElementById("alpha-iv").value);
    const encryptedAlphaKey = importArrayBuffer(document.getElementById("alpha-key-output").value);

    const hashedUserPasswordBuffer = await hashingkey(password);
    const hashedUserPasswordUint8Array = await new Uint8Array(hashedUserPasswordBuffer)

    const decryptedAlphaKey = await decryptAlphaKey(hashedUserPasswordUint8Array, iv, encryptedAlphaKey);
    document.getElementById("alpha-key-output").value = exportArrayBuffer(decryptedAlphaKey);
});



document.getElementById("encrypt-beta-data").addEventListener("click", async () => {
    const betaData = new TextEncoder().encode(document.getElementById("beta-input").value);
    const alphaKey = importArrayBuffer(document.getElementById("beta-alpha-key").value);
    const iv = importArrayBuffer(document.getElementById("beta-iv").value);

    const hashedAlphaKeyBuffer = await hashingkey(alphaKey);
    const hashedAlphaKeyUint8Array = await new Uint8Array(hashedAlphaKeyBuffer);

    const encryptedBeta = await encryptBeta(betaData, hashedAlphaKeyUint8Array, iv);

    document.getElementById("beta-output").value = exportArrayBuffer(encryptedBeta);
});

document.getElementById("decrypt-beta-data").addEventListener("click", async () => {
    const encryptedBeta = importArrayBuffer(document.getElementById("beta-output").value);
    const iv = importArrayBuffer(document.getElementById("beta-iv").value);
    const alphaKey = importArrayBuffer(document.getElementById("beta-alpha-key").value);

    const hashedAlphaKeyBuffer = await hashingkey(alphaKey);
    const hashedAlphaKeyUint8Array = await new Uint8Array(hashedAlphaKeyBuffer);

    const decryptedBeta = await decryptBeta(encryptedBeta, hashedAlphaKeyUint8Array, iv);
    document.getElementById("beta-output").value = new TextDecoder().decode(decryptedBeta);
});



document.getElementById("generate-alpha-iv").addEventListener("click", async () => {
    const iv = await generateRandomBytes();
    document.getElementById("alpha-iv").value = exportArrayBuffer(iv);
    document.getElementById("beta-iv").value = exportArrayBuffer(iv);
});
