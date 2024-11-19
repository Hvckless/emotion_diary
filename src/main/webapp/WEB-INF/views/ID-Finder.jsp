<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ID-Finder</title>
</head>
<body>
	<!-- 상단 헤더 -->
	<header>
		<h1>header</h1>
	</header>
	
	<!-- 아이디 찾기 폼 -->
	<div id=ID_Finder_cantainer>
		<form action="">
			<div id="ID_Finder_Box">
				<label>Email</label>
				<input type="text" id="username" name="useremail" placeholder="이메일을 입력해주세요">
				<label>Nickname</label>
				<input type="text" id="userpw" name="usernickname" placeholder="사용하실 닉네임을 입력해주세요">
			</div>
			<button type="submit" id="ID_Finder_btn">아이디 찾기</button>
		</form>
	</div>

</body>
</html>