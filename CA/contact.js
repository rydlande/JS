const name = document.getElementById("name").addEventListener("invalid", nameFunc);
const subject = document.getElementById("subject").addEventListener("invalid", subjectFunc);
const email = document.getElementById("email").addEventListener("invalid", emailFunc);
const adress = document.getElementById("adress").addEventListener("invalid", adressFunc);
const submit = document.getElementById("submit").submit(); 

function nameFunc() {
  alert("Required");
}

function subjectFunc() {
    alert("Must have at least 10 characteres");
  }

function emailFunc() {
  alert("Must be an e-mail adress");
}

function adressFunc() {
    alert("Must have at least 25 characteres");
  }