<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="stepup.emotiondiary.enums.StatisticsDate" %>
<%
	String description = "HELLO";
	String emotion_summary = "notgood";
	StatisticsDate statistics_type = StatisticsDate.WEEK;

	request.setAttribute("description", description);
	request.setAttribute("statistics_type", statistics_type);
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="wrapper">
		<jsp:include page="./component/title.jsp" />

		<article>
			<div id="emotion-summary-icon">
				<span>나의 하루는?</span>
				<img src="${emotion_summary}.webp">
			</div>
			
			<div id="emotion-graph">
				<span>오늘의 감정 추이</span>
			</div>
			
			<div id="emotion-summary-text">
				<span>종합</span>
				
				<jsp:include page="./component/summary.jsp" />
			</div>
			
			
			<jsp:include page="./component/swap-statistics.jsp" />
		</article>
	</div>
</body>
</html>