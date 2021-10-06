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


// // for parallax
// window.addEventListener("scroll", onScroll);
//  // you want to add event to the window
// var textSecondLayer = document.getElementById("textSecondLayer");
// var textThirdLayer = document.getElementById("textThirdLayer");

//  function onScroll (evt){
//     console.log(window.scrollY);
//     // console.log("0.05*scrollY",0.05* window.scrollY);
//     console.log("20 - (20/500)* window.scrollY",50 - 0.2*(50/500)* window.scrollY + "%");
//     // if(window.scrollY<= 500){
//     //     console.log("500")
//     // }

//     hiText.style.top = 30 - (0.05)*(30/500)* window.scrollY + "%";
//     textSecondLayer.style.top = 40 - 0.3*(40/500)* window.scrollY + "%"
//     textThirdLayer.style.top = 60 - 0.6*(60/500)* window.scrollY + "%"
//     console.log("secondLayerPos",textSecondLayer.style.top);
//     console.log("thirdLayerPos",textThirdLayer.style.top);


// }


// prompt
var myName = prompt("What is your name")
// var myName = "Ahmad";


var userName = document.getElementById("userName");
var userNameEmail = document.getElementById("userNameEmail")

// capitalise the first letter of myName
var myNameCapitalised = myName[0].toUpperCase() + myName.slice(1,);
// console.log(myNameCapitalised);
userName.innerHTML = myNameCapitalised;
userNameEmail.innerHTML = myNameCapitalised;

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

window.addEventListener("scroll", onScroll);

function onScroll(evt){
    if(window.scrollY >= aboutMe.offsetTop){
        // console.log("you reach about");
        if(mediaQueryJS700.matches){

        timelineRightFirst.classList.add("animate__animated");
        timelineRightFirst.classList.add("animate__fadeInRight");
        // timelineRightFirst.classList.add("animate__delay-2s");
        timelineRightFirst.style.opacity = "1"
        
        timelineLeft.style.opacity = "1"
        timelineLeft.classList.add("animate__animated");
        timelineLeft.classList.add("animate__fadeInLeft");
        timelineLeft.classList.add("animate__delay-2s");
        
        
        timelineRight.style.opacity = "1"
        timelineRight.classList.add("animate__animated");
        timelineRight.classList.add("animate__fadeInRight");
        timelineRight.classList.add("animate__delay-3s");
    }

    // if(window.scrollY >= projectSection.offsetTop){
        // console.log("you reach about");
        // if(mediaQueryJS700.matches){

        // projectOne.classList.add("animate__animated");
        // projectOne.classList.add("animate__fadeInRight");
        // // timelineRightFirst.classList.add("animate__delay-2s");
        // projectOne.style.opacity = "1"
        
        // style.opacity = "1"
        // projectTwo.classList.add("animate__animated");
        // projectTwo.classList.add("animate__fadeInLeft");
        // projectTwo.classList.add("animate__delay-2s");
        
        
    //     projectThree.style.opacity = "1"
    //     projectThree.classList.add("animate__animated");
    //     projectThree.classList.add("animate__fadeInRight");
    //     // projectThree.classList.add("animate__delay-7.5s");

    //     projectFour.style.opacity = "1"
    //     projectFour.classList.add("animate__animated");
    //     projectFour.classList.add("animate__fadeInRight");
    //     // projectFour.classList.add("animate__delay-7.5s");
    //  }

    // }
}
}
