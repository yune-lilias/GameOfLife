<!DOCTYPE html>
<html lang="en">
	<head><meta charset="UTF-8">
		<title>Sign up success</title>
		<link href="main.css" type="text/css" rel="stylesheet" />
	</head>
	
	<body>
		  <div class="topnav">
         <a class="active" href="Game.html">Home</a>
        <a href="register.php">Register</a>
        <a href="login.php">Login</a>
        <a href="about.php">About Us</a>
        </div>
		<?=login()?>
		<br>
        <br>
      
      
	</body>


	<?php

	function login(){
         $error = true;
		$req = array('un','pw');
        $errtype = "empty field";
         setcookie('backpage', "login.php", time() + (86400 * 30), "/");
       
        $users = fopen('users.txt','a');
        $originstring = file_get_contents('users.txt');
        $data = explode("\r\n",$originstring);

        $newuser = $_POST['un'].",".$_POST['pw']."\r\n";
        echo($newuser);
          try {
        foreach($data as $field){
        $ppl = explode(',',$field);
        $errtype = '';
        if($ppl[0] == $_POST['un']){ 
         if($ppl[1] == $_POST['pw']){
        setcookie('prev', 'login success', time() + (86400 * 30), "/");
        setcookie('user', $_POST['un'], time() + (86400 * 30), "/");
       header("Location: Game.html");
        exit();
         }
        else{
            setcookie('prev', 'incorrect password', time() + (86400 * 30), "/");
            header("Location: login.php");
            exit();
        }
        } 
        }
        setcookie('prev', 'account not found', time() + (86400 * 30), "/");
            header("Location: register.php");
            exit();

         } catch (Exception $e) {
        echo 'blabla';
       echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
        
        fwrite($users,$newuser);
        fclose($users);
     //   setcookie('name',$_POST['un'],time() + (86400 * 30), "/"); 
        setcookie('prev', "login success", time() + (86400 * 30), "/");
     header("Location: Game.html");
     exit();
        return $_POST['un'];
      }


	?>
</html>