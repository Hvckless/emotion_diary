<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title>
</head>
<body>
	<!-- 상단 헤더 -->
	<header>
		<h1>header</h1>
	</header>
	
	<!-- 회원가입 폼 -->
	<div id="Register_cantainer">
		<form action="">
			<div id="Register_Box">
				<label class="input_label">ID</label>
				<input class="user_input" type="text" id="userId" name="userId" placeholder="아이디를 입력해주세요"> <button>중복확인</button>
				<label class="input_label">Password</label>
				<input class="user_input" type="text" id="userPw" name="userPw" placeholder="비밀번호를 입력해주세요">
				<label class="input_label">Email</label>
				<input class="user_input" type="text" id="userEmail" name="userEmail" placeholder="이메일을 입력해주세요">
				<label class="input_label">Nickname</label>
				<input class="user_input" type="text" id="userName" name="userName" placeholder="사용하실 닉네임을 입력해주세요">
			</div>
		<button type="submit" id="registerBtn" class="register_btn">회원가입</button>
		</form>
	</div>
	

</body>
</html>