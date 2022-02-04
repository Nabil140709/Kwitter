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

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name : " + room_name);
row = "<div class='room_name' id=" + room_name + " onclick='redirectToRoomName(this.id)' ># "+ room_name + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}