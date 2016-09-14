var myFirebase = new Firebase('https://proj-d5898.firebaseio.com/');
  var usernameInput = document.querySelector('#username');
  var textInput = document.querySelector('#text');
  var postButton = document.querySelector('#post');

  postButton.addEventListener("click", function() {
    var msgUser = usernameInput.value;
    var msgText = textInput.value;
    myFirebase.push({username:msgUser, text:msgText});
    textInput.value = "";
  });

  var startListening = function() {
   myFirebase.on('child_added', function(snapshot) {
     var msg = snapshot.val();


     var msgUsernameElement = document.createElement("strong");
     msgUsernameElement.textContent = msg.username;
     msgUsernameElement.classname="primary-font";

     var msgTextElement = document.createElement("p");
     msgTextElement.textContent = msg.text;


     var msgElement = document.createElement("div");
     msgElement.id= "msg";
     msgElement.appendChild(msgUsernameElement);
     msgElement.appendChild(msgTextElement);

     document.getElementById("results").appendChild(msgElement);
     msgElement.scrollTop = msgElement.scrollHeight;

     var box=document.getElementById("box");
     box.scrollTop=box.scrollHeight;
   });
 }

 // Begin listening for data
 startListening();
