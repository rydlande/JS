const url = "https://harry-potter-api-en.onrender.com/characters";

const main = document.querySelector("main");
const loader = document.getElementById("loading");


function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    
  loader.classList.remove("display");
  });
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
        loader.classList.remove("loading");
        
        const { id, character, image, nickname } = wizard;

        const card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
        
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