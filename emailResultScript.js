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


firebase.database().ref('portfolioWebsite').child('contactInformationMessage').on('child_added', function(snapshot){
    var contactName = snapshot.val().name; //string
    var messageInputData = snapshot.val().msg; // string
    var emailInputData = snapshot.val().email;
    var dateInputData = snapshot.val().date;
    var urgentMessageInput = snapshot.val().urgentMessage;

    // create element when firebase got new child
    var rowHolder = document.createElement('div');
    var dateInputContainer = document.createElement('p');
    var userNameContainer = document.createElement('p');
    
    var emailInputContainer = document.createElement('p');
    var messageInputContainer = document.createElement('p');
    
    var container = document.getElementById("container");

    dateInputContainer.innerHTML = dateInputData;
    userNameContainer.innerHTML = contactName;
    emailInputContainer.innerHTML = emailInputData;
    messageInputContainer.innerHTML = messageInputData;
    
    
    
    rowHolder.classList.add("rowHolder");
    userNameContainer.classList.add("rowHolderText");
    messageInputContainer.classList.add("rowHolderText");
    emailInputContainer.classList.add("rowHolderText");
    dateInputContainer.classList.add("rowHolderText");

    if(snapshot.val().urgentMessage == true){
      rowHolder.style.color = "red";
    }

    rowHolder.append(dateInputContainer);
    rowHolder.append(userNameContainer);
    
    rowHolder.append(emailInputContainer);
    rowHolder.append(messageInputContainer);

    container.append(rowHolder);

    
})
