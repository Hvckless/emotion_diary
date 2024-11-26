<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
</head>
<body>
	<!-- 상단 헤더 -->
	<header>
		<h1>header</h1>
	</header>
	
	<!-- 로그인 폼 -->
	<div id="container">
		<form action="">
			<div id="loginBox">
				<label>ID</label>
				<input type="text" id="userId" name="userId" placeholder="ID를 입력해주세요">
				<label>Password</label>
				<input type="text" id="userPw" name="userPw" placeholder="PW를 입력해주세요">
			</div>
			<button type="submit" id="loginBtn" class="login_bth">로그인</button>
		</form>
		
		<!-- 비밀번호 찾기 -->
		<div id="passwordBox">
			<p><a href="Password-Finder.jsp">Forget Password?</a></p>
		</div>
		
		<!-- OAuth 로그인 -->
		<div id="oauthBox">
			<button onclick=""><img src="resources/btnW_official.png" alt="네이버 로그인 이미지" class="login_bth"></button>
			<button onclick=""><img src="resources/web_light_sq_SI@1x.png" alt="구글 로그인 이미지" class="login_bth"></button>
		</div>
		
		<!-- 회원가입 -->
		<div id="RegisterBox">
			<p>계정이 없으시다면 <a href="Register.jsp">여기</a>를 클릭해주세요</p>
		</div>
	</div>


</body>
</html>