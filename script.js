function givennameB()
    {
        var x = document.getElementById("givenname").value;
        if (x == "")
        {
            document.getElementById("givenname").style.borderColor = "red";
            document.getElementById("givenname").style.borderWidth = "2px";
        }
    }
function givennameF()
    {
        document.getElementById("givenname").style.borderColor = "green";
    }
function userNameB()
    {
        var x = document.getElementById("userName").value;
        if (x == "")
        {
            document.getElementById("userName").style.borderColor = "red";
            document.getElementById("userName").style.borderWidth = "1px";
        }
    }
function userNameF()
    {
        document.getElementById("userName").style.borderColor = "green";
    }
function pwordB()
    {
        var x = document.getElementById("pword").value;
        if (x == "")
        {
            document.getElementById("pword").style.borderColor = "red";
            document.getElementById("pword").style.borderWidth = "1px";
        }
    }
function pwordF()
    {
        document.getElementById("pword").style.borderColor = "green";
    }
function emailB()
    {
        var x = document.getElementById("email").value;
        if (x == "")
        {
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("email").style.borderWidth = "1px";
        }
    }
function emailF()
    {
        document.getElementById("email").style.borderColor = "green"; 
    }
function addressB()
    {
        var x = document.getElementById("address").value;
        if (x == "")
        {
            document.getElementById("address").style.borderColor = "red";
            document.getElementById("address").style.borderWidth = "1px";
        }
    }
function addressF()
    {
        document.getElementById("address").style.borderColor = "green"; 
    }
function genB()
    {
        var x = document.getElementById("gen").value;
        if (x == "")
        {
            document.getElementById("gen").style.borderColor = "red";
            document.getElementById("gen").style.borderWidth = "1px";
        }
    }
function genF()
    {
        document.getElementById("gen").style.borderColor = "green"; 
    }
function uInterestB()
    {
        var x = document.getElementById("userInterests").value;
        if (x == "")
        {
            document.getElementById("userInterests").style.borderColor = "red";
            document.getElementById("userInterests").style.borderWidth = "1px";
        }
    }
function uInterestF()
    {
        document.getElementById("userInterests").style.borderColor = "green"; 
    }
function outputs()
    {
        var name = document.getElementById("givenname").value;
        var username = document.getElementById("userName").value;
        var password = document.getElementById("pword").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var gender = document.getElementById("gen").value;
        var interests = document.getElementById("userInterests").value;
    
        document.getElementById("display").innerHTML = "Name: " + name + "<br><br>" + "Username: " + username + "<br><br>" + "Password: " + password + "<br><br>" + "Gender: " + gender + "<br><br>" + "Email: " + email + "<br><br>" + "Address: " + address + "<br><br>" + "Interests: " + interests + "<br><br>";
    
        return false;
    }
function reset()
    {
        document.getElementById("display").innerHTML="";
        document.getElementById("givenname").style.border = "1px solid black";
        document.getElementById("userName").style.border = "1px solid black";
        document.getElementById("pword").style.border = "1px solid black";
        document.getElementById("email").style.border = "1px solid black";
        document.getElementById("address").style.border = "1px solid black";
        document.getElementById("gen").style.border = "1px solid black";
        document.getElementById("userInterests").style.border = "1px solid black";
    }
