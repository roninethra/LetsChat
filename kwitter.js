function userlogin(){
    username= document.getElementById("username").value;
      localStorage.setItem("name", username);
      window.location=("kwitter_room.html");
  }