const name = document.getElementById("name");
const subject = document.getElementById("subject").addEventListener("invalid", subjectFunc);
const email = document.getElementById("email").addEventListener("invalid", emailFunc);
const adress = document.getElementById("adress").addEventListener("invalid", adressFunc);
const submit = document.getElementById("submit").submit(); 
const loader = document.getElementById("loading");


function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    
  loader.classList.remove("display");
  }, 5000);
}

function hideLoading() {
  loader.classList.remove("display");
}




function nameFunc() {
  alert("Required");
}

subjectFunc.onkeyup = () => {
  let inLen = subjectFunc.value.length;
  console.log(inLen);

    alert("Must have at least 10 characteres");
  }

function emailFunc() {
  alert("Must be an e-mail adress");
}

function adressFunc() {
    alert("Must have at least 25 characteres");
  }

//submit.onclick = function ()