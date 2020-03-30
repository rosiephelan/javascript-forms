document
  .getElementById("submitForm")
  .addEventListener("click", function(event) {
    event.preventDefault();
    showCard();
  });
function showCard() {
  document.getElementById("form").style.display = "none";
  document.querySelector(".card-section").style.display = "block";
  //greeting
  var msg = document.getElementById("msg");
  document.getElementById("greetingOK").innerHTML = "Hello   " + msg.value;
  //event
  var eventName = document.getElementsByName("eventtype");
  for (i = 0; i < eventName.length; i++) {
    if (eventName[i].checked) {
      document.getElementById("event-name").innerHTML =
        "You are invited to " + eventName[i].value + " ceremony ..";
      var occasssion = eventName[i].value;

      if (occasssion == "wedding") {
        document.querySelector(".card-section").style.backgroundImage =
          "url('https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/03/24/15/wedding-unsplash-couple.jpg')";
      } else if (occasssion == "graduation") {
        document.querySelector(".card-section").style.backgroundImage =
          "url('https://studybreaks.com/wp-content/uploads/2018/04/Natick-Public-Schools-e1524667439290.jpg')";
      } else {
        document.querySelector(".card-section").style.backgroundImage =
          "url('https://s.yimg.com/ny/api/res/1.2/x6HSYqNr8FjxCVxMIbEByw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/5160dcf0-ba85-11e9-a7dd-8a6639514bb4')";
      }
    }
  }
  //message
  var msg1 = document.getElementById("message-area").value;
  document.getElementById("message-paragraph").innerHTML = msg1;
}
