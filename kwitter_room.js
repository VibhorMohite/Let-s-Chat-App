
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBgAWOR06kjwnRsFgDkn6bZG-nm_VkQ4JE",
      authDomain: "kwitter-95690.firebaseapp.com",
      projectId: "kwitter-95690",
      storageBucket: "kwitter-95690.appspot.com",
      messagingSenderId: "957326939845",
      appId: "1:957326939845:web:c4473aa6d39dd8d11b82ac",
      measurementId: "G-L3NNPK0T5Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
