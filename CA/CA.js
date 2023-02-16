const url = "https://legacy--api.herokuapp.com/api/v1/characters";

let main = document.querySelector("main");

const getCharacters = () => {
  fetch (url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      data.forEach((wizard) => {
        const { id, name, image_url, species } = wizard;
        const container = document.createElement("div");
        container.classList.add("card");
        container.innerHTML = `
        <div class="card">
        <div class="card-img">
          <img 
            src="${image_url}" 
            alt="${name}" 
          />
          <h2>${name}</h2>`

        main.appendChild(container);
        
      });
    });
};

getCharacters();