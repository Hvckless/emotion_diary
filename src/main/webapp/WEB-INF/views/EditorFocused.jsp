<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>감정 일지 | 작성하기</title>
</head>
<body>
	<div id="editor_container">
		<form action="">
			<label for="emotion">지금 기분은?</label><br>
			<select name="emotion">
				<option value="즐거움">즐거움</option>
				<option>행복함</option>
				<option>슬픔</option>
				<option>자괴감</option>
				<option>불안함</option>
				<option>우울함</option>
				<option>화남</option>
				<option>황당함</option>
				<option>당황스러움</option>
				<option>놀람</option>
				<option>극대노</option>
			</select><br>
			
			<label for="content">무슨 일이 일어나고 있나요?</label><br>
			<textarea style="width: 90%; height: 150px;" name="content"></textarea>
			
			<button>기록</button>
		</form>
	</div>
</body>
</html>