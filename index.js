//Okay, so this will be the JavaScript file for the alarm clock...

var alarmSound = new Audio();
alarmSound.src = 'alarm.mp3;'
var alarmTimer;

//putting this setAlarm function here to fix the uncaught reference error my code is complaining about
function setAlarm(button) {
  var ms = document.getElementById('alarmTime').valueAsNumber;
  if(isNaN(ms)) {
    alert('Invalid Date');
    return;
}

var alarm = new Date(ms);

var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

var differenceInMs = alarm.getTime() - (new Date()).getTime();

if(differenceInMs < 0)
{
  alert('Specified time is already passed!');
  return;
}

alarmTimer = setTimeout(initAlarm, differenceInMs);

button.innerText = 'Cancel Alarm';
button.setAttribute('onclick', 'cancelAlarm(this);');

};


function cancelAlarm(button) {
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);');
  clearTimeout(alarmTimer);
};


function initAlarm() {
    alarmSound.play();
    document.getElementById('alarmOptions').style.display = '';
};


function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmOptions').style.display = 'none';
};


function snooze() {
  stopAlarm();
  setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
}

//(refer to Alarm Clock in JS | JavaScript Tutorials | Web Development Tutorials video by VerkkoNet on YouTube)
//I'm following that video tutorial


//---------------------------------------------------------------------------------------------------------------------------------------------


window.addEventListener('load', function() {

  function getTime() {
    //okay, so the JavaScript way to get the time...

    var today = new Date();

    //I notice that when it's a time like 4:00 or 4:01, my webpage shows only 0 or 1 for the minutes...

    //hours
    if(today.getHours() > 12)
    {
      var time = (today.getHours() - 12) + ":" + today.getMinutes();
    }

    else {
      var time = today.getHours() + ":" + today.getMinutes();
    }

    //Minutes
    if(today.getMinutes() < 10)
    {
      //not sure if this will work...
      str(today.getMinutes()) == "0" + str(today.getMinutes());
    }

    document.getElementById("currentTime").innerHTML = time; //time.toLocaleTimeString();

  }

  event.preventDefault();
  getTime();
  //setAlarm();

});


//-------------------------------------------------------------------------------------------------------
