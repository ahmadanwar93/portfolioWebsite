var helloTextArr = ["Hello", "أهلا", "Hi", "你好", "こんにちは", "Bonjour", "Hola","안녕하십니까", "Привет", "Selamat sejahtera"];
var hiText = document.getElementById("hiText");
var counter = 0;
var emailInput = document.getElementById("emailInput");
var messageInput = document.getElementById("messageInput");

setInterval(sayHello, 1000);

function sayHello(){
    if(counter < helloTextArr.length){
        hiText.innerHTML = helloTextArr[counter];
        // console.log(helloTextArr[counter]);
        counter += 1;
    }else{
        counter = 0;
    }
}




// prompt
var myName = prompt("What is your name")
if (myName == ""){
    myName = "user";
}


var userName = document.getElementById("userName");
var userNameEmail = document.getElementById("userNameEmail");
var userNameContactMeDesktop = document.getElementById("userNameContactMeDesktop");


// capitalise the first letter of myName
var myNameCapitalised = myName[0].toUpperCase() + myName.toLowerCase().slice(1,);
// console.log(myNameCapitalised);
userName.innerHTML = myNameCapitalised;
userNameEmail.innerHTML = myNameCapitalised;
userNameContactMeDesktop.innerHTML = myNameCapitalised;

// we want to add Firebase to capture the things that user has inputted

// Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCVUuo2kj338RjTDnqM7jqtID_e-MI6XrE",
    authDomain: "chat-room-6fd6a.firebaseapp.com",
    databaseURL: "https://chat-room-6fd6a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-6fd6a",
    storageBucket: "chat-room-6fd6a.appspot.com",
    messagingSenderId: "706627574928",
    appId: "1:706627574928:web:5f35e19b6dc15ea2bb4c15"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);

  var submitButton = document.getElementById("submitButton");


var userNameInput = myNameCapitalised;

submitButton.addEventListener("click", sendMessage);

var newDate = new Date().toLocaleString();
// console.log(newDate);
var urgentMessage = document.getElementById("checkBoxImportant");
var urgent = false;



function sendMessage(){
    
        
    // push the data and store in database
    
    if (messageInput.value == "" || emailInput.value == ""){
        alert("Please enter both the message and email");
    }else{

    

    firebase.database().ref("portfolioWebsite").child('contactInformationMessage').push({
        name: myNameCapitalised,
        msg: messageInput.value,
        email: emailInput.value,
        date: newDate,
        urgentMessage: urgentMessage.checked, 
    })

    // aku try sini
    
    // firebase.database().ref("chat").child('message').push({
    //     name:"Ahmad",
    //     msg: messageInput.value,
    //     email: emailInput.value,
    //     date: newDate,
    // })





    // aku try atas




    console.log(myNameCapitalised);
    console.log(messageInput.value);
    console.log(emailInput.value);
    console.log(newDate);


    // userNameInput= "";
    messageInput.value= ""; 
    emailInput.value= "";  
    urgentMessage.checked = false;
    }
}

messageInput.addEventListener("keydown", sendMessageEnter);

function sendMessageEnter(evt){
  if (evt.keyCode == 13){
            sendMessage();
        }
  
}

var mediaQueryJS700 = window.matchMedia("(min-width: 800px)")
var timelineLeft = document.getElementById("timelineLeft");
var timelineRight = document.getElementById("timelineRight");
var timelineRightFirst = document.getElementById("timelineRightFirst");




var projectSection = document.getElementById("projectSection");
var aboutMe = document.getElementById("about-me");
var projectOne = document.getElementById("projectOne");
var projectTwo = document.getElementById("projectTwo");
var projectThree = document.getElementById("projectThree");
var projectFour = document.getElementById("projectFour");
var contactMe = document.getElementById("contact-me");
var bottomRightDiv = document.getElementById("bottomRightDiv");
var topLeftDiv = document.getElementById("topLeftDiv");

window.addEventListener("scroll", onScroll);

function onScroll(evt){
    if(window.scrollY >= aboutMe.offsetTop){
        
        if(mediaQueryJS700.matches){

        timelineRightFirst.classList.add("animate__animated");
        timelineRightFirst.classList.add("animate__fadeInRight");
        // timelineRightFirst.classList.add("animate__delay-2s");
        timelineRightFirst.style.opacity = "1"
        
        timelineLeft.style.opacity = "1"
        timelineLeft.classList.add("animate__animated");
        timelineLeft.classList.add("animate__fadeInLeft");
        timelineLeft.classList.add("animate__delay-1s");
        
        
        timelineRight.style.opacity = "1"
        timelineRight.classList.add("animate__animated");
        timelineRight.classList.add("animate__fadeInRight");
        timelineRight.classList.add("animate__delay-2s");
    }

    if(window.scrollY >= projectSection.offsetTop){
        console.log("you reach about");
        if(mediaQueryJS700.matches){

        projectOne.classList.add("animate__animated");
        projectOne.classList.add("animate__fadeInRight");
        // timelineRightFirst.classList.add("animate__delay-2s");
        projectOne.style.opacity = "1"
        
        // style.opacity = "1"
        projectTwo.classList.add("animate__animated");
        projectTwo.classList.add("animate__fadeInLeft");
        projectTwo.classList.add("animate__delay-1s");
        
        
        // projectThree.style.opacity = "1"
        projectThree.classList.add("animate__animated");
        projectThree.classList.add("animate__fadeInRight");
        projectThree.classList.add("animate__delay-2s");

        // projectFour.style.opacity = "1"
        projectFour.classList.add("animate__animated");
        projectFour.classList.add("animate__fadeInLeft");
        projectFour.classList.add("animate__delay-3s");
     }
    }

    if(window.scrollY >= contactMe.offsetTop){
        
        if(mediaQueryJS700.matches){

        topLeftDiv.classList.add("animate__animated");
        topLeftDiv.classList.add("animate__fadeInRight");
        // timelineRightFirst.classList.add("animate__delay-2s");
        topLeftDiv.style.opacity = "1"
        
        bottomRightDiv.style.opacity = "1"
        bottomRightDiv.classList.add("animate__animated");
        bottomRightDiv.classList.add("animate__fadeInLeft");
        bottomRightDiv.classList.add("animate__delay-1s");
        
     }

    }
}
}
