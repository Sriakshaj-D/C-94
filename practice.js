const firebaseConfig = {
    apiKey: "AIzaSyBravi6fHsWu1UxI_5VOfsOx9L8aYbBqrs",
    authDomain: "kwitter-app-c52a0.firebaseapp.com",
    projectId: "kwitter-app-c52a0",
    storageBucket: "kwitter-app-c52a0.appspot.com",
    messagingSenderId: "259707729238",
    appId: "1:259707729238:web:ad94227063ab2fd9d5d2f7"
  };

const app = initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    
}