
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCJXdPwYM1JSEzIMILoWDVdgcnG2PMBJqM",
      authDomain: "kwitter-2f503.firebaseapp.com",
      databaseURL: "https://kwitter-2f503-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f503",
      storageBucket: "kwitter-2f503.appspot.com",
      messagingSenderId: "680953493303",
      appId: "1:680953493303:web:1b83256ace0185882e8cb2"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location="index.html";
}
