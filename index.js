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
  //I'll need the method to make sure the minutes are anywhere from 0-60 inclusive.
  //I confess I'm having a hard time doing this, but maybe if I did something
  //like this:

  /*
  function setAlarm() {
    var ms = document.getElementById('alarmTime').valueAsNumber;
    if(isNaN(ms)) {
      alert('Invalid Date');
      return;
  }

  var alarm = new Date(ms);

  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(),....)

  (refer to Alarm Clock in JS | JavaScript Tutorials | Web Development Tutorials video
  by VerkkoNet on YouTube)
}
  */


  /*function catchTimeForAlarm() {



  }*/


  event.preventDefault();
  getTime();

});
