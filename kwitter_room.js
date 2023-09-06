
const firebaseConfig = {
  apiKey: "AIzaSyBravi6fHsWu1UxI_5VOfsOx9L8aYbBqrs",
  authDomain: "kwitter-app-c52a0.firebaseapp.com",
  projectId: "kwitter-app-c52a0",
  storageBucket: "kwitter-app-c52a0.appspot.com",
  messagingSenderId: "259707729238",
  appId: "1:259707729238:web:ad94227063ab2fd9d5d2f7"
};
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
