const url = "https://harry-potter-api-en.onrender.com/characters";

const main = document.querySelector("main");
const loader = document.getElementById("loading");
const textOutput = document.getElementById("showOutput");


function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    
  loader.classList.remove("display");
  }, 5000);
}

function hideLoading() {
  loader.classList.remove("display");
}


const getCharacters = () => {
  fetch (url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      

      data.forEach((wizard) => {
        loader.classlist.remove("loading");
        
        const { id, character, image, nickname } = wizard;

        const card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
        <div class="intro">
          <p class="somespace">Discover the Wizarding World</p>
          <p>Meet our cherished</p>
          <h1>CHARACTERS</h1>
          
        <div>
        <div class="card-img">
          <img 
            src="${image}" 
            alt="Picture of ${character}" 
          />
          <h3>${nickname}</h3>
          <p>${character}</p>`

        card.href = `./details.html?id=${wizard.id}`;



        if (!wizard.image) {
          return;
        }
        
       

        main.appendChild(card);  
      });
    })
    .catch((e) => {
      main.innerHTML = `404 Something went wrong. Please try again later.`
      console.log(e);
    })
};

getCharacters();