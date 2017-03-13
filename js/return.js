/**
 * Created by ashwinsankar on 21/12/16.
 */
var myFirebase = new Firebase('https://proj-d5898.firebaseio.com/chats/');
//var timeBase = new Firebase('https://testbot-bb24f.firebaseio.com/time/')


var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');
var today;
var ip;
$(document).ready(function() {
    $.getJSON("http://jsonip.com/?callback=?", function(data) {
        console.log(data);
        ip = data.ip;
        var Fire = new Firebase('https://proj-d5898.firebaseio.com/ip/');
        var ter = get_time();
        Fire.push({
            IP: ip,
            time: ter
        });
    });

});

var listRef = new Firebase("https://proj-d5898.firebaseio.com/presence/");
var userRef = listRef.push();

// Add ourselves to presence list when online.
var presenceRef = new Firebase("https://proj-d5898.firebaseio.com/.info/connected");
presenceRef.on("value", function(snap) {
    if (snap.val()) {
        // Remove ourselves when we disconnect.
        userRef.onDisconnect().remove();
        userRef.set(true);

    }
});

// Number of online users is the number of objects in the presence list.
listRef.on("value", function(snap) {
    console.log("# of online users = " + snap.numChildren());
    $('#usercount').text(snap.numChildren());
});

function get_time() {
    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() {
            var a = objToday;
            if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
            a = parseInt((a + "").charAt(1));
            return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th"
        }(),
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    today = dayOfMonth + " of " + curMonth + ", " + curYear;
    var time = curHour + ":" + curMinute + ":" + curSeconds + curMeridiem;
    console.log(today);
    return time;
}


//event listener for click
postButton.addEventListener("click", function() {
    var msgText = textInput.value;
    var time = get_time(); //getting time from function
    console.log(msgText + time);
    $.getJSON("http://jsonip.com/?callback=?", function(data) {
        var ip;
        console.log(data);
    });
    myFirebase.push({
        text: msgText,
        postTime: time,
        day: today,
        IP: ip
    });
    textInput.value = "";
    var t = document.getElementById("text");
    while (t.scrollTop == 0) {
        if (t.rows > minRows)
            t.rows--;
        else
            break;
        t.scrollTop = 1;
        if (t.rows < maxRows)
            t.style.overflowY = "hidden";
        if (t.scrollTop > 0) {
            t.rows++;
            break;
        }
    }
    t.focus();

});

var startListening = function() {
    myFirebase.on('child_added', function(snapshot) {
        var msg = snapshot.val();


        var msgUsernameElement = document.createElement("strong");
        msgUsernameElement.textContent = "[" + msg.postTime + "]";
        msgUsernameElement.class = "card-header";

        var msgTextElement = document.createElement("p");
        msgTextElement.textContent = msg.text;
        msgTextElement.class = "card-text";

        var msgElement = document.createElement("div");
        msgElement.id = "msg";
        //  msgElement.addClass("card-columns card-outline-info");
        msgElement.appendChild(msgUsernameElement);
        msgElement.appendChild(msgTextElement);
        document.getElementById("results").appendChild(msgElement);
        //document.$('#msg').addClass('card-outline-info');
        msgElement.scrollTop = msgElement.scrollHeight;

        var box = document.getElementById("box");
        box.scrollTop = box.scrollHeight;

        $("#slider").slider({
                orientation: "vertical"
            }

        );
    });
}

// Begin listening for data
startListening();


var minRows = 2;
var maxRows = 9;

function auto_grow(e) {
    var t = e;
    // var t = document.getElementById();
    if (t.scrollTop == 0) t.scrollTop = 1;
    while (t.scrollTop == 0) {
        if (t.rows > minRows)
            t.rows--;
        else
            break;
        t.scrollTop = 1;
        if (t.rows < maxRows)
            t.style.overflowY = "hidden";
        if (t.scrollTop > 0) {
            t.rows++;
            break;
        }
    }
    while (t.scrollTop > 0) {
        if (t.rows < maxRows) {
            t.rows++;
            if (t.scrollTop == 0) t.scrollTop = 1;
        } else {
            t.style.overflowY = "auto";
            break;
        }
    }
}

$('#text').keypress(function(e) {
    if (e.which == 13) {
        // submit via ajax or
        $('#post').click();
    }
});

$('#form').submit(function() {
    return false;
});

//time drop down
