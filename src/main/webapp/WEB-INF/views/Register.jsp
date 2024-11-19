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
				<label>ID</label>
				<input type="text" id="username" name="usernaem" placeholder="아이디를 입력해주세요"> <button>중복확인</button>
				<label>Password</label>
				<input type="text" id="userpw" name="userpw" placeholder="비밀번호를 입력해주세요">
				<label>Email</label>
				<input type="text" id="username" name="useremail" placeholder="이메일을 입력해주세요">
				<label>Nickname</label>
				<input type="text" id="userpw" name="usernickname" placeholder="사용하실 닉네임을 입력해주세요">
			</div>
		<button type="submit" id="Register_btn">회원가입</button>
		</form>
	</div>
	

</body>
</html>