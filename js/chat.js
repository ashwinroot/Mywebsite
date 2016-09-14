var myFirebase = new Firebase('https://proj-d5898.firebaseio.com/');
  var usernameInput = document.querySelector('#username');
  var textInput = document.querySelector('#text');
  var postButton = document.querySelector('#post');


  postButton.addEventListener("click", function() {
    var msgUser = usernameInput.value;
    var msgText = textInput.value;
    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
  var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
  var time = curHour + ":" + curMinute + ":" + curSeconds+curMeridiem;
 console.log(today);
    myFirebase.push({username:msgUser, text:msgText , date:today, postTime:time});
    textInput.value = "";
  });

  var startListening = function() {
   myFirebase.on('child_added', function(snapshot) {
     var msg = snapshot.val();


     var msgUsernameElement = document.createElement("strong");
     msgUsernameElement.textContent = msg.username +"  [" +msg.postTime +"]"; 
     msgUsernameElement.class="card-header";

     var msgTextElement = document.createElement("p");
     msgTextElement.textContent = msg.text;
     msgTextElement.class ="card-text";




     var msgElement = document.createElement("div");
     msgElement.id= "msg";
     msgElement.class="card-columns card-outline-primary";
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
