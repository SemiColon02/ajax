<?php
	$name=$_POST["name"];
	$email=$_POST["email"];
	$img=$_FILES["image"];
	
	//here were send data to the client
	echo "data is not received successfully the received data is ".$name." and ".$email;
	
	//here we are uploading the file to the folder
	$tmp="C:/xampp/htdocs/ajax/post/".$img["name"];
	move_uploaded_file($img["tmp_name"],$tmp);
?>