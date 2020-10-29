//Okay, so this will be the JavaScript file for the alarm clock...

window.addEventListener('load', function() {

  function getTime() {
    //okay, so the JavaScript way to get the time...

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    //next TODO: I need to format the time so that it is not in military time
    document.getElementById("currentTime").innerHTML = time; //time.toLocaleTimeString();

  }

  event.preventDefault();
  getTime();

});
