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

  event.preventDefault();
  getTime();

});
