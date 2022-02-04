const firebaseConfig = {
  apiKey: "AIzaSyDhkwU8DzykHPnj1tt-8yUNAWW0_kmNvLo",
  authDomain: "kwitter-app-f4a59.firebaseapp.com",
  databaseURL: "https://kwitter-app-f4a59-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-f4a59",
  storageBucket: "kwitter-app-f4a59.appspot.com",
  messagingSenderId: "990430352231",
  appId: "1:990430352231:web:c435a0c70eb4368b4ad5c2"
};
  
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name " , user_name);
    window.location="kwitter_room.html";
}
