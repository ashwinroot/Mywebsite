/**
 * Created by ashwinsankar on 21/12/16.
 */
var myFirebase = new Firebase('https://accoliteexp.firebaseio.com/');


var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');
var today;


function get_time() {
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
    today = dayOfMonth + " of " + curMonth + ", " + curYear;
    var time = curHour + ":" + curMinute + ":" + curSeconds+curMeridiem;
    console.log(today);
    return time;
}


//event listener for click
postButton.addEventListener("click", function() {
    var msgText = textInput.value;
    var time = get_time();   //getting time from function
    console.log(msgText+time);
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        var ip;
        console.log(data);
    });
    myFirebase.push({text:msgText ,postTime:time, day: today});
    textInput.value = "";
});

var startListening = function() {
    myFirebase.on('child_added', function(snapshot) {
        var msg = snapshot.val();



        var msgUsernameElement = document.createElement("h3");
        msgUsernameElement.textContent = msg.day;
        msgUsernameElement.class="card-header";

        var msgTime = document.createElement("h6");
        msgTime.textContent = msg.postTime;
        msgTime.class="card-header";



        var msgTextElement = document.createElement("p");
        msgTextElement.textContent = msg.text;

        msgTextElement.class ="h5";

        var msgElement = document.createElement("div");
        msgElement.id= "msg";
        msgElement.class="card-columns card-outline-primary";
        msgElement.appendChild(msgUsernameElement);
        msgElement.appendChild(msgTime);
        msgElement.appendChild(msgTextElement);


        document.getElementById("results").appendChild(msgElement);
        msgElement.scrollTop = msgElement.scrollHeight;

        var box=document.getElementById("box");
        box.scrollTop=box.scrollHeight;

        $( "#slider" ).slider({
            orientation : "vertical"

            }

        );
    });
}

// Begin listening for data
startListening();


var minRows = 2;
var maxRows = 30;

function auto_grow(e) {
    var t = e;
   // var t = document.getElementById();
    if (t.scrollTop == 0)   t.scrollTop=1;
    while (t.scrollTop == 0) {
        if (t.rows > minRows)
            t.rows--; else
            break;
        t.scrollTop = 1;
        if (t.rows < maxRows)
            t.style.overflowY = "hidden";
        if (t.scrollTop > 0) {
            t.rows++;
            break;
        }
    }
    while(t.scrollTop > 0) {
        if (t.rows < maxRows) {
            t.rows++;
            if (t.scrollTop == 0) t.scrollTop=1;
        } else {
            t.style.overflowY = "auto";
            break;
        }
    }
}

$('#text').keypress(function(e){
    if(e.valueOf() == 13){
        // submit via ajax or
        $('#post').click();
    }
});

//time drop down

var timetext=['5:00AM','5:15 AM','5:30 AM','5:45 AM','6:00AM','6:15 AM','6:30 AM','6:45 AM','7:00AM','7:15 AM','7:30 AM','7:45 AM','8:00AM','8:15 AM','8:30 AM','8:45 AM','9:00AM','9:15 AM','9:30 AM','9:45 AM','10:00AM','10:15 AM','10:30 AM','10:45 AM','11:00AM','11:15 AM','11:30 AM','11:45 AM','12:00PM','12:15 PM','12:30 PM','12:45 PM','1:00PM','1:15 PM','1:30 PM','1:45 PM','2:00PM','2:15 PM','2:30 PM','2:45 PM','3:00PM','3:15 PM','3:30 PM','3:45 PM','4:00PM','4:15 PM','4:30 PM','4:45 PM','5:00PM','5:15 PM','5:30 PM','5:45 PM','6:00PM','6:15 PM','6:30 PM','6:45 PM','7:00PM','7:15 PM','7:30 PM','7:45 PM','8:00PM','8:15 PM','8:30 PM','8:45 PM','9:00PM','9:15 PM','9:30 PM','9:45 PM','10:00PM','10:15 PM','10:30 PM','10:45 PM','11:00PM','11:15 PM','11:30 PM','11:45 PM'];

function populatedropdown(timefield){
    var timefield=document.getElementById(timefield)
    for (var m=0; m<76; m++)
        timefield.options[m]=new Option(timetext[m], timetext[m])
}

window.onload=function(){
    populatedropdown("timedropdown")
}



