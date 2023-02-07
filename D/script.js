import { specs } from "./specs.js";



const main = document.querySelector("main");

//main.classList.add("wrapper");

const renderCards = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        const {brand, modell, color, year, active} = arr[i];

        //container
        const container = document.createElement("div");
        container.classList.add("container");

        //heading
        const typeHead = document.createElement("h2");
        typeHead.innerHTML = specs[i].type[0];
        container.appendChild(typeHead);

        //model
        const modelHead = document.createElement("h3");
        modelHead.innerHTML = specs[i].type[1];
        container.appendChild(modelHead);

        main.appendChild(container);
    }
};

renderCards(specs)