function addUser() {

    username = document.getElementById("username").value;

    localStorage.setItem("username", username);
    
      window.location = "Kwitter_room.html";
}

function addRoom()
{

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData()