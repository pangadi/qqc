var firebaseConfig = {
    apiKey: "AIzaSyAF4ZvkBhLARoJnb0PC1gsicS2ynqZ7szg",
    authDomain: "qc-club.firebaseapp.com",
    projectId: "qc-club",
    storageBucket: "qc-club.appspot.com",
    messagingSenderId: "467607458927",
    appId: "1:467607458927:web:9be21ae3f1fa928a6c699a",
    measurementId: "G-P161VJKMFE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var provider = new firebase.auth.GoogleAuthProvider()
console.log(firebase)
var user
var token
$("#login").click(function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        user = result.user;
        token = result.credential.accessToken;
        console.log(token)
        loggedIn()
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage)
      });
})

var modal
var btn
var span
function loggedIn(){
    $("#loggedIn").load("loggedin.html", function(){
        $("#welcome").html(`Welcome, ${user.displayName}`)
        modal = document.getElementById("myModal");
        btn = document.getElementById("create");
        span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        $("#goCreate").click(function(){
            alert(`Creating class ${$("#className").val()}`)
        })
    })
}
