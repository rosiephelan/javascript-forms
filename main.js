// let form = document.getElementById("form");
// let cardSection = document.querySelector("#card-section");
// let submitButton = document.querySelector("#submitForm");
// let greetingMessage = document.querySelector(".greeting-h1");
// let eventName = document.querySelector(".event-name");
// let messageParagraph = document.querySelector(".message-paragraph");

// document.getElementById("submitForm").addEventListener("click", function(event){
//     event.preventDefault();
//     showCard();
//     });

// function showCard() {
//     form.style.display= "none";
//     cardSection.style.display = "block";
//     greetingMessage.innerHTML = "hello world";
// };


document.addEventListener("DOMContentLoader", function() {
    console.log("the dom has loaded ");
  });
  let form = document.getElementById("form");
  let cardSection = document.querySelector(".card-section");
  let submitButton = document.querySelector("#submitForm");
  let greetingMessage = document.querySelector(".greeting-h1");
  let eventName = document.querySelector(".event-name");
  let messageParagraph = document.querySelector(".message-paragraph");
  document
    .getElementById("submitForm")
    .addEventListener("click", function(event) {
      event.preventDefault();
      showCard();
    });
  function showCard() {
    form.style.display = "none";
    cardSection.style.display = "block";
    var input = document.getElementById("searchTxt");
    document.getElementById("greetingOK").innerHTML = input.value;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
