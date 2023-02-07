import {
    bulbasaur,
    ivysaur,
    venusaur,
    charmander,
    charmeleon,
    charizard,
    squirtle,
    wartortle,
    blastoise
} from "./pokemons.js";

export const pokemons = [
    bulbasaur,
    ivysaur,
    venusaur,
    charmander,
    charmeleon,
    charizard,
    squirtle,
    wartortle,
    blastoise
];



//randomizer
const genInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
  
const selectedPokemon = pokemons[genInt(0, pokemons.length)];



const name = document.querySelector(".name");
const typeList = document.querySelector("#typeList");
const nameList = document.querySelector("#nameList");
const statList = document.querySelector("#statList");
console.log(name);
console.log(typeList);
console.log(nameList);
console.log(statList);


const nameLi = nameList.querySelectorAll("li");
const statLi = statList.querySelectorAll("li");
console.log(nameLi);
console.log(statLi);

name.innerHTML = selectedPokemon.name.english;


for (let i = 0; i < selectedPokemon.type.length; i++) {
    typeList.innerHTML += `<li>${selectedPokemon.type[i]}</li>`;
}


for (let i = 0; i < nameLi.length; i++) {
    let nameArr = Object.values(selectedPokemon.name)
    nameLi[i].innerHTML = `${nameLi[i].innerHTML} ${nameArr[i + 1]}`;
}


for (let i = 0; i < statLi.length; i++) {
    let statArr = Object.values(selectedPokemon.base)
    statLi[i].innerHTML = `${statLi[i].innerHTML} ${statArr[i]}`;
}





const adjustBg = (pkmn) => {
    let selectedColor;
    switch (pkmn.type[0]) {
        case "Water":
            selectedColor = "#74b9ff";
            break;
        case "Fire":
            selectedColor = "#e17055";
            break;
        case "Grass":
            selectedColor = "#00b894";
            break;
        default:
            selectedColor = "#dfe6e9";
            break;
    }
    document.body.style.backgroundColor = selectedColor;
}


adjustBg(selectedPokemon);