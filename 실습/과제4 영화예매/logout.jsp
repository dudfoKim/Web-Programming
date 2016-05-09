<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<% 
request.setCharacterEncoding("UTF-8");
session.invalidate();
%>

<script>
window.alert("로그아웃합니다!");
location.href = "main.jsp";
</script>