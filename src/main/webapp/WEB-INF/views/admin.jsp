<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="stepup.emotiondiary.dto.GenderDTO" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin Page</title>
</head>
<body>

	<c:forEach var="gender" items="${legend}">
	   <span>${gender.getGender_id()}</span>
	   <span>${gender.getName()}</span>
	</c:forEach>
	
	<c:forEach var="auth_provider" items="${legeno}">
	   <span>${auth_provider.getAuth_provider_id()}</span>
	   <span>${auth_provider.getName()}</span>
	</c:forEach>

</body>
</html>