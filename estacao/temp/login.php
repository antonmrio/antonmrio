<?php
	$user = "a";
	$pass = "a";
    if ($_POST['uname']==$user && $_POST['psw']==$pass) {
    	session_start();
    	$_SESSION['uname']=$_POST['uname'];
    	$_SESSION['psw']=$_POST['psw'];
    	echo "logado";
    	echo "<script>window.location='gravar.php'</script>";
    }
	
?>