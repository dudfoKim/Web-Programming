$(document).ready(function(){
	$("#checkButton").click(function(){
		$.ajax({
			type : "POST",
			url : "./userInfo.jsp",
			dataType : "json",
			contenType : "application/son; charset=utf-8",
			beforeSend : function(){
				$("body").css("cursor","wait");
			},
			success : function( data ) {
				var table = $("#result");
				$("#result tbody").remove();//삭제
				table.css("display","block");
				var i = 0;
				for ( i = 0; i < data.length; i++ ){
					var tr = $("<tr></tr>");
					var userName = $("<td></td>").text(data[i].userName);
					var userSex = $("<td></td>").text(data[i].userSex);
					var userAge = $("<td></td>").text(data[i].userAge);
					var userPhone = $("<td></td>").text(data[i].userPhone);
					
					tr.append(userName);
					tr.append(userSex);
					tr.append(userAge);
					tr.append(userPhone);
					
					table.append(tr);
				}
			},
			error : function(request, status, error) {
				alert("code:" + request.status + "\n"
						+ "message:" + request.responseText
						+ "\n" + "error:" + error);
			},
			complete: function(){
				$("body").css("cursor","default");
			}
		});
	});
	
});