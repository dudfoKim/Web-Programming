<%@page import="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="java.io.FileNotFoundException"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.io.*"%>

<% request.setCharacterEncoding("euc-kr");%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>ajax�ǽ�</title>
</head>
<body>
	<%
	String user = request.getParameter("userCheck");
	String userSex = "";
	BufferedReader reader = null;
	String directory = "D:\\lab\\pra";
	File dirFile = new File(directory);//����
	File []fileList=dirFile.listFiles();//���� ����Ʈ �̱�
	JSONArray returndata = new JSONArray();
	JSONObject json = null;
	PrintWriter pw = response.getWriter();
 	try{
 		for(File tempFile : fileList) {
			if(tempFile.isFile() &&  tempFile.getName().endsWith(".txt")){//Ȯ���� Ȯ��.
				String tempFileName = tempFile.getName();
				json = new JSONObject();
			    reader = new BufferedReader(new FileReader(directory+"/"+tempFileName));
			    
			    //�� ���� ����ؼ� ��.
			    String userName = reader.readLine();
			 	String str = reader.readLine();
			    if(str.equals("M")){
			 		userSex = "����";
			 	}else{
			 		userSex = "����";
			 	}
			 	String userAge = reader.readLine();
			 	String userPhone = reader.readLine();
			 	
			 	//�� ���� ����ؼ� ��.
			 	//json�� key, value�� ����
			 	json.put("userName", userName);
			 	json.put("userSex",userSex);
			 	json.put("userAge",userAge);
			 	json.put("userPhone", userPhone);
				//��������� ���ΰ�����
			 	
			 	returndata.add(json);//json array�� �ֱ�
		  	}
		}
		pw.print(returndata);
		pw.flush();
		pw.close();
 	} catch( Exception e ){
 		e.printStackTrace();
 	} finally{
 		try{
 			if( reader != null ) reader.close();
 		}catch( Exception e1 ){
 			e1.printStackTrace();
 		}
 	}
		
%>

</body>
</html>
