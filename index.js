//Okay, so this will be the JavaScript file for the alarm clock...

window.addEventListener('load', function() {

  function getTime() {
    //okay, so the JavaScript way to get the time...

    var today = new Date();

    if(today.getHours() > 12)
    {
      var time = (today.getHours() - 12) + ":" + today.getMinutes();
    }

    else {
      var time = today.getHours() + ":" + today.getMinutes();
    }

    document.getElementById("currentTime").innerHTML = time; //time.toLocaleTimeString();

  }

  //Next TODO: I need to make a method that catches the time the user wants an alarm for and then
  //actually acts as an alarm
  //I'll need the method to make sure the minutes are anywhere from 0-60 inclusive (exclusive?)
  //I confess I'm having a hard time doing this, but maybe if I did something
  //like this:

  var alarmSound = new Audio();
  alarmSound.src = 'alarm.mp3;'

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

  setTimeout(initAlarm, differenceInMs);

  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');



};


function cancelAlarm(button) {
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);');
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
  setTimeout(initAlarm, 36000);
}

//(refer to Alarm Clock in JS | JavaScript Tutorials | Web Development Tutorials video by VerkkoNet on YouTube)
//I'm following that video tutorial...not sure if I can commit anything to GitHub since my code isn't doing much as of now...
//but maybe it would look better if I did...

  event.preventDefault();
  getTime();
  setAlarm();

});
