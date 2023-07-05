window.addEventListener( "load", function () {
  
  function sendReq() {
    let httpRequest=new XMLHttpRequest();
    let url="http://localhost:3000/users"
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    
    httpRequest.onerror = function() {// diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
        console.log("Connecting to server with " + url + " failed!\n");
    };
    
    httpRequest.onload = function(e) {
        if (this.status == 200) {
          let data = this.response;
          let obj = JSON.parse(data);
            console.log(obj);
            alert("localhost:3000/users responded:\n" 
            + obj.userId + ", " + obj.name + ", " + obj.role);
        }
        else {     //Handhabung von nicht-200er
            alert ("HTTP-status code was: " + this.status);
        }
    };

   const usernameInput = document.getElementById('login-username').value;
   const passwordInput = document.getElementById('login-password').value;
   let mina = {username: usernameInput, password: passwordInput};
    httpRequest.send(JSON.stringify(mina));
}
  // Access the form element...
  const form = document.getElementById( "myForm" );

  // take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();
    sendReq();
  } );
} );

