

function validateemail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email == '')
    {
        document.getElementById("error").style.display="none";
        document.getElementById("error").innerHTML = "Whoops! It looks like you forgot to add your email";
        document.getElementById("error").style.display="inline";
    }
    if(mailformat.test(email.value))
    {
        alert("Submitted Successfully");
        document.getElementById("error").style.display="none";
    }
    else
    {
        document.getElementById("error").style.display="none";
        document.getElementById("error").innerHTML = "Please provide a valid email address";
        document.getElementById("error").style.display="inline";
        document.getElementById("email").style.borderColor="red";
    }
}
