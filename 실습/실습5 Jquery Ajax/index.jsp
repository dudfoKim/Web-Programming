<%@page import="java.io.FileNotFoundException"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%@ page import="java.io.*" %>
<% request.setCharacterEncoding("euc-kr");%>	

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>ajax�ǽ�</title>
<script src="jquery.js"></script>
<script src="jquery-1.11.3.min.js"></script>
<script src="ajax.js"></script>
<link rel = "stylesheet" style = "text/css" href = "index.css">
</head>
<body>

<form action ="makeUser.jsp" method ="post" name="userInfo" >
	<table>
		<tr>
			<td>N A M E :</td>
			<td><input name = "userName" type="text" required/></td>
		</tr>
		<tr>
			<td>S E X :</td>
			<td><input name = "userSex" type="radio" value = "M"/>����
			<input name = "userSex" type="radio" value = "W"/>����</td>
		</tr>
		<tr>
			<td>A G E :</td>
			<td><input name = "userAge" type="text" required/></td>
		</tr>
		<tr>
			<td>P H O N E :</td>
			<td><input name = "userPhone" type="text" required/></td>
		</tr>
		<tr>
			<td><input type="submit" value="����" /></td>
		</tr>
	</table>
</form>
<br><br><hr>
<table>
	<tr>
		<td><input type="button" value ="��� �ο� ���� Ȯ��" id = "checkButton"/></td>
	</tr>
</table>
<table id = "result">
	<caption>����� ����� ����</caption>
	<thead>
		<tr>
			<th>�̸�</th>
			<th>����</th>
			<th>����</th>
			<th>����ȣ</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>
</body>
</html>