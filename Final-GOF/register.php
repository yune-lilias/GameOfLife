<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="main.css">
<title>Register</title>
<script type="text/javascript" src="rl.js"></script>
</head>
<body>

<div class="topnav">
         <a class="active" href="Game.html">Home</a>
        <a href="register.php">Register</a>
        <a href="login.php">Login</a>
        <a href="about.php">About Us</a>
        </div>
    <?php checkerr();?>
    <div id = 'box'>
<form action="register-submit.php" method="post" id = 'myForm'
                onsubmit="return validate('myForm')" >

<fieldset>
    <legend>Register</legend>
    <div class = 'error' id='unerr'><br></div>
    <label>Username:</label> <input type="text" name="un" size="10"><br>
    <div class = 'error' id='pwerr'><br></div>
    <label>Password:</label> <input type="password" name="pw" size="10"><br><br>

    <input type="submit" value="Register">
    </p>
</fieldset>
</form>
</div>
<div id='output'>
<br>
</div>
<div class='picnav'>
     <a href="https://www.pixiv.net/artworks/63402383" class = "bgpic">Background Pic Link</a>
    </div>
</body>
<?php

    function checkerr(){  
        if(isset($_COOKIE['prev'])){
            $error = $_COOKIE['prev'];
             echo '<script type="text/javascript">'.
     'alert("'.$error.'");'.
     '</script>';
       setcookie("prev", "", time() - 3600,'/');
        }} 

        ?>


</html>