var name = document.getElementById("login");
var password=document.getElementById("password");

function pasuser(form)
{
    console.log(form.username.value + form.password.value);
    if((form.username.value=="ashwin" || form.username.value=="william") && (form.password.value=="ashwin" || form.password.value=="wiliam"))
    {
       //alert("Valid username");
       window.open("chatbot.html");
    }
    else
      alert("Invalid User");
}
