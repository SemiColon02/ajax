window.onload=function(){
	var button=document.getElementById("send");
	send.onclick=function(){
		var data=document.forms[0];
		var fData=new FormData(data);
		var xmlHttp=new XMLHttpRequest();
		xmlHttp.open("POST","action.php");
		xmlHttp.send(fData);
		xmlHttp.onreadystatechange=function(){
			if(xmlHttp.readyState==4&&xmlHttp.status==200){
				console.log(xmlHttp.responseText);
			}
		}
	}
}

/*
	1.Here when the user click the send button the data will be send to the
	  server using the ajax post method
	2.The syntax for the ajax post method is
		var xmlhttp=new XMLHttpRequest();
		xmlHttp.open(method,url);
		xmlHttp.send(data);
		
		method is post and the url is the file name of server
		data is the values which we want to send to the server
	
	3.Here we use "FormData" api to collect all the inputs from the users
	  then we send to server, it require form or data which is we can append to
	  FormData api
		ex:
			<form method="POST">
				name<input type="text" name="name"><br/>
				email<input type="email" name="email"><br/>
				<input type="button" value="send" id="send">
			</form>
			<script>
				var button=document.getElementById("send");
				send.onclick=function(){
					var forms=document.forms[0];
					var formData=new FormData(forms);
					formData.forEach(function(data){
						console.log(data);
					});
				};
			</script>
	
	4.we can also append data to the FormData api use the append method 
		syntax:
			FormData.append(Name,Value);
		ex:
			formData.append("name","nanne");
*/