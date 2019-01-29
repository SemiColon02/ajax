window.onload=function(){
	
	//Getting the name and email from the user input
	
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var button=document.getElementById("submit");
	
	//when user click the send button
	
	button.addEventListener("click",function(){
	
		var http=new XMLHttpRequest();
		http.open("GET","action.php?name="+name.value+"&email="+email.value,true);
		http.send();
		http.onreadystatechange=function(){
			if(http.readyState==4&&http.status==200){
				console.log(http.responseText);
			}	
		}
	});
}

/*
	Syntax for the XMLHttpRequest;
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open(method,url,boolean);
	here 
	-> method is GET or POST
	-> url is the url where the server side operations will be done
	->	boolean is optional,true or false, true for async and false for sync if u didnt mention async
	
	xmlhttp.send();
	
	readyState
		0 - request not initialized
		1 - request has been set updateCommands
		2 - request has been sent
		3 - request is in process
		4 - request is completed
	
	xmlhttp.responseText or xmlhttp.response
	
	The response data is consoled here we can do whatever 
	operations we want with the response data
*/