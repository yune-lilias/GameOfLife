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