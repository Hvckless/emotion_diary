<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password-Finder</title>
</head>
<body>
	<!-- 상단 헤더 -->
	<header>
		<h1>header</h1>
	</header>
	
	<!-- 비밀번호 찾기 폼 -->
	<div id=container>
		<form action="">
			<div id="passwordFinderBox">
				<label class="input_label">ID</label>
				<input type="text" id="userId" name="userId" placeholder="아이디를 입력해주세요">
				<label class="input_label">Nickname</label>
				<input type="text" id="userName" name="userName" placeholder="사용하신 닉네임을 입력해주세요">
			</div>
			<button onclick="" id="canselBtn" class="password_finder_btn">취소</button> <button type="submit" id="passwordFinderBtn" class="password_finder_btn">비밀번호 찾기</button>
		</form>
	</div>

</body>
</html>