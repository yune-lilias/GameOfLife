<!DOCTYPE html>
<html lang="en">
	<head><meta charset="UTF-8">
		<title>Sign up success</title>
		<link href="main.css" type="text/css" rel="stylesheet" />
	</head>
	
	<body>
		  <div class="topnav">
        <a class="active" href="index.php">Home</a>
        <a href="register.pgp">Register</a>
        <a href="login.php">Login</a>
        <a href="about.php">About Us</a>
        </div>
		<?=signup()?>
		<br>
        <br>
      
      
	</body>


	<?php

	function signup(){
         $error = false;
		$req = array('un','pw');
        $errtype = "empty field";
         setcookie('backpage', "signup.php", time() + (86400 * 30), "/");
       
        $users = fopen('users.txt','a');
        $originstring = file_get_contents('users.txt');
        $data = explode("\r\n",$originstring);

        $newuser = $_POST['un'].",".$_POST['pw']."\r\n";
        echo($newuser);
          try {
        foreach($data as $field){
        $ppl = explode(',',$field);
        $errtype = 'account exist';
        if($ppl[0] == $_POST['un']){ 
        setcookie('prev', $errtype, time() + (86400 * 30), "/");
       
     
  
        
        header("Location: register.php");
       exit();
   }
        }
         } catch (Exception $e) {
        echo 'blabla';
       echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
        
        fwrite($users,$newuser);
        fclose($users);
     //   setcookie('name',$_POST['un'],time() + (86400 * 30), "/"); 
        setcookie('prev', "signup success", time() + (86400 * 30), "/");
     header("Location: login.php");
        return $_POST['un'];
      }


	?>
</html>