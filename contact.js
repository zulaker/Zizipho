var firebaseConfig = {
  apiKey: "AIzaSyCoXdlxp0RHwWfYpW2MFgppy-2UfrIPwdg",
  authDomain: "portfolio-20494.firebaseapp.com",
  databaseURL: "https://portfolio-20494.firebaseio.com",
  projectId: "portfolio-20494",
  storageBucket: "",
  messagingSenderId: "610833147590",
  appId: "1:610833147590:web:3bd43cf12e411918"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


document.getElementById('Zippy').addEventListener('submit',
submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();

 var fname = getInputVal('fname');
 var lname = getInputVal('lname');
 var email = getInputVal('email');
 var subject = getInputVal('subject');
 
 //Save Message
 saveMessage(fname, lname, email, subject)

 //Show alert
 document.querySelector('.alert').style.display = 'block';

 //Hide alert after 3 seconds
 setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
 },3000);

 //Clear Form
 document.getElementById('Zippy').reset();

}



//Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(fname, lname, email, subject){
var newMessageRef = messagesRef.push();
newMessageRef.set({
fname: fname,
lname: lname,
email: email,
subject: subject
})
}
