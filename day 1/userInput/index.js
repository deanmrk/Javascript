//easy way
/*
let username;

username = window.prompt("What is your username? "); //pop up textbox

console.log(username);
*/
let username;
document.getElementById("submitBtn").onclick = function () {
  username = document.getElementById("textbox").value;
  document.getElementById("userName").innerHTML = `Hello ${username}!`; //change the value of h1
};
