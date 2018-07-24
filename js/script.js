$(document).ready(function(){
  var noon = 12;
  var evening = 18;
  var wakeuptime = 9;
  var lunchtime = 12;
  var partytime = 17;
  var naptime = lunchtime + 2;

  var updateClock = function(){
    var time = new Date().getHours();
    var message = document.getElementById('timeEvent');
    var lolcat = document.getElementById('lolcat');
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

    if (time == partytime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
      messageText = "It is party time!";
    } else if (time == naptime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "Time to take a nap.";
    } else if (time == lunchtime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Lunch break! Lunch break!";
    } else if (time == wakeuptime) {
      image = "https://s3.amazonws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Time to get up. Time to get going!";
    } else if (time < noon) {
      messageText = "Good Morning!";
    } else if (time > evening) {
      messageText = "Good Night!";
    } else {
      messageText = "Good Afternoon!";
    }
    console.log(messageText);
    message.innerText = messageText;
    lolcat.src = image;
    showCurrentTime();
  };

  var showCurrentTime = function(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon){
      meridian = "PM";
    }
    if (hours > noon){
      hours = hours - 12;
    }
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
  };
  updateClock();

  var oneSecond = 1000;
  setInterval(updateClock, oneSecond);
  var partyTimeButton = document.getElementById("partyTimeButton");
  var napTimeSelector = document.getElementById("napTimeSelector");
  var lunchTimeSelector = document.getElementById("lunchTimeSelector");
  var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

  var partyEvent = function(){
    if(partytime < 0){
      partytime = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#OA8DAB";
    } else {
      partytime = -1;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
    }
  };

  var lunchEvent = function(){
    lunchtime = lunchTimeSelector.value;
  };

  var wakeUpEvent = function(){
    wakeuptime = wakeUpTimeSelector.value;
  };

  var napEvent = function(hour){
    naptime = napTimeSelector.value;
  };

  $("#partyTimeButton").click(partyEvent);
  $("#napTimeSelector").change(napEvent);
  $("#lunchTimeSelector").change(lunchEvent);
  $("#wakeUpTimeSelector").change(wakeUpEvent);
  partyEvent();
});
