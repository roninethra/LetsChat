
var firebaseConfig = {
    apiKey: "AIzaSyC1jhj80fz-z3w9LnYpBR5tU3C-vIGgaBY",
    authDomain: "kwitter-fec98.firebaseapp.com",
    databaseURL: "https://kwitter-fec98-default-rtdb.firebaseio.com",
    projectId: "kwitter-fec98",
    storageBucket: "kwitter-fec98.appspot.com",
    messagingSenderId: "1091107497091",
    appId: "1:1091107497091:web:c1f634354f814fa08da7b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var namewelcome= localStorage.getItem("name");
  document.getElementById("nameforwelcome").innerHTML= namewelcome;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();