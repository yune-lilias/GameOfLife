<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="main.css">
<title>Validate</title>
<script>
// Defining a function to display error message
function handleForm(event) { event.preventDefault(); } 


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function reportErrors(errorfield){
    var msg = "You forgot to fill in the following field(s) ";
    var numError;

    for (var i = 0; i<errorfield.length; i++) {
        msg += (errorfield[i] + ", ");
    }
    alert(msg.slice(0, -2));
}


function checkLength(text, min, max){
    min = min || 1;
    max = max || 10000;
 
    if (text.length < min || text.length > max) {
        return false;
    }
    return true;
}


function validate(formname){
	var form = document.getElementById(formname);
    var un = form.un.value;
    var pw = form.pw.value;
    var errors = false;
    var errorfield = [];
    var index = 0;
    printError("unerr", "<br>");	
    printError("pwerr", "<br>");
    if (!checkLength(un)) {
        printError("unerr", "<br>Please Enter Your Username");
        errors = true;
        errorfield.push("Username");
    }
    
 
    if (!checkLength(pw)) {
        printError("pwerr", "<br>Please Enter Your Password");
        errors = true;
        errorfield.push("Password");
    }

  

    if (errorfield.length) {
        reportErrors(errorfield);
        return false;
    }

    var data = un + "," + pw;
    var f = 'users.txt';
    return true;
}



function dispout(id,fn,ln){
str = "";
str = str+ 'UserId: '+id + "<br>";
str = str+ 'First Name: '+fn + "<br>";
str = str+ 'Last Name: '+ln + "<br>";
document.getElementById('output').innerHTML = str;
document.getElementById("myForm").reset();
}

</script>
</head>
<body>

<div class="topnav">
        <a class="active" href="index.php">Home</a>
        <a href="register.html">Register</a>
        <a href="login.html">Login</a>
        <a href="about.php">About Us</a>
        </div>
    <?php checkerr();?>
    <div id = 'box'>
<form action="register-submit.php" method="post" id = 'myForm'
                onsubmit="validate('myForm')" >

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