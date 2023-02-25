const url = "https://harry-potter-api-en.onrender.com/characters";

let main = document.querySelector("main");

const getCharacters = () => {
  fetch (url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      data.forEach((wizard) => {
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
      html.innerHTML = `404 Something went wrong. Please try again later.`
    })
};

getCharacters();