
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB-lq2_6MfIP6iYGWNs2TwHTfRApDP1Kpk",
    authDomain: "kwitter-694f0.firebaseapp.com",
    databaseURL: "https://kwitter-694f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-694f0",
    storageBucket: "kwitter-694f0.appspot.com",
    messagingSenderId: "275629927015",
    appId: "1:275629927015:web:3c524d9166d919fe4f42c2",
    measurementId: "G-EZN5L8PTPL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser() {
	user_name = document.getElementById("user_name").value;
	firebase.database().ref("/").child(user_name).update({
		purpose : "adding user"
	})
}