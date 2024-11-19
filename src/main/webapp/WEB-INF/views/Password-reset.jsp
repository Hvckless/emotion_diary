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
	<div id=Password_cantainer>
		<form action="">
			<div id="Password_Box">
				<label>Password</label>
				<input type="text" id="userpw" name="userpw" placeholder="비밀번호를 입력해주세요">
				<label>Password Check</label>
				<input type="text" id="userpw" name="userpw" placeholder="비밀번호를 똑같이 입력해주세요">
			</div>
			<button type="submit" id="Password_btn">비밀번호 재설정</button>
		</form>
	</div>

</body>
</html>