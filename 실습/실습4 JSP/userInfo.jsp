<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<%
request.setCharacterEncoding("UTF-8");
String name = request.getParameter("filename");

out.println(name + "에 대해서 출력합니다.<br/><br/>");

BufferedReader reader = null;
String resultArray[] = new String[4];
int i = 0;
PrintWriter tempwriter = null;

try
{
	tempwriter = response.getWriter();
	String temp = "/prac4/" + name + ".txt";
  	String filePath = application.getRealPath(temp);
  	reader = new BufferedReader(new FileReader(filePath));
	File f = new File(filePath);

	if(f.exists()==false)
	{
		tempwriter.println("<script>alert('찾으려는 아이디가 없습니다!');</script>");
		tempwriter.println("<script>location.href = 'index.jsp';</script>");
		tempwriter.close();
	}
	else
	{	
		while(true)
		{
			String str = reader.readLine();

			if(str==null)
			{
					break;
			}
			if(str=="M")
			{
				str = "남성";
			}
			if(str=="F")
			{
				str = "여성";
			}

			resultArray[i] = str;
			i++;
		}
			
		out.println("이름은 " + resultArray[0] + "이고, 성별은 " + resultArray[1] + "이며,<br/>나이는 " + resultArray[2] + "이고, 번호는 " + resultArray[3] + "입니다.");
		out.println("<br/><br/>" + " 출력 끝");
	}
}
catch(FileNotFoundException finfe)
{
	out.println("<br/>파일이 존재하지 않습니다.<br/>");
}
catch(IOException ioe)
{
   	out.println("<br/>파일을 읽을수 없습니다.<br/>");
}
finally
{
	try
	{
		reader.close();
  	}
	catch(Exception e)
	{
    
   	}
}
%>