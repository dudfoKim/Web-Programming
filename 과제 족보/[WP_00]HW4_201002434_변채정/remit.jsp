<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
		request.setCharacterEncoding("UTF-8");
		String accountNum = request.getParameter("accountNum");
		String remitNum = request.getParameter("remitNum");
		String money = request.getParameter("money");
		String remit = request.getParameter("remit");
		String pw = null;
		String pwd = null;
		String mm = null;
		
		String filePath = "C:\\Users\\Administrator\\Documents\\New Folder\\" + accountNum + ".txt";
		String file = "C:\\Users\\Administrator\\Documents\\New Folder\\" + remitNum + ".txt";
		String Path = "C:\\Users\\Administrator\\Documents\\New Folder\\";
		String name = remitNum+".txt";
		
		File dir = new File(Path);
		String filenames[] = dir.list();

		FileReader fr = new FileReader(filePath);
		BufferedReader read = new BufferedReader(fr);
		pw = read.readLine();
		read.close();

		int moneyInt = Integer.parseInt(money);
		int remitInt =Integer.parseInt(remit);
		
		for(int cnt=0; cnt<filenames.length; cnt++){
			if(filenames[cnt].equals(name)){
				
				FileReader f = new FileReader(file);
				BufferedReader re = new BufferedReader(f);
				pwd = re.readLine();
				mm=re.readLine();
				
				int mmInt = Integer.parseInt(mm);
				
				if(moneyInt<remitInt)
			{
			PrintWriter writer = response.getWriter();
           writer.println("<script type='text/javascript'>");
           writer.println("alert('잔액 부족');");
           writer.println("history.back();");
           writer.println("</script>");
           writer.flush();
		}
		else
		{
			int result1 = moneyInt-remitInt;
			int result2 = mmInt+remitInt;
			
			PrintWriter writer = null;
			
					writer = new PrintWriter(filePath);
					writer.println(pw);
					writer.println(result1);
					writer.close();		
					
					PrintWriter write = null;
					
					write = new PrintWriter(file);
					write.println(pwd);
					write.println(result2);
					write.close();		
			
				response.sendRedirect("login.jsp?password="+pw+"&accountNum="+accountNum);	
		}	
			}
			else
			{
				PrintWriter writer = response.getWriter();
		           writer.println("<script type='text/javascript'>");
		           writer.println("alert('계좌가 존재하지 않습니다');");
		           writer.println("history.back();");
		           writer.println("</script>");
		           writer.flush();
			}
		}
%>
</body>
</html>