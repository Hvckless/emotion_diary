<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password-reset</title>
</head>
<body>
	<!-- 상단 헤더 -->
	<header>
		<h1>header</h1>
	</header>
	
	<!-- 회원가입 폼 -->
	<div id=passwordCantainer>
		<form action="">
			<div id="passwordBox">
				<label class="input_label">Password</label>
				<input type="text" class="user_pw" name="userpw" placeholder="비밀번호를 입력해주세요">
				<label class="input_label">Password Check</label>
				<input type="text" class="user_pw" name="userpw" placeholder="비밀번호를 똑같이 입력해주세요">
			</div>
			<button onclick="" id="canselBtn" class="password_finder_btn">취소</button><button type="submit" id="passwordBtn" class="password_finder_btn">비밀번호 재설정</button>
		</form>
	</div>

</body>
</html>