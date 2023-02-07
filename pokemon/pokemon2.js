import { pokemons } from "./pokemons.js";



const main = document.querySelector("main");

//main.classList.add("wrapper");


//main.classList.remove("wrapper");

export const adjustBg = (element, pkmn) => {                        //velger bakgrunnsfarge basert 
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
    element.style.backgroundColor = selectedColor;
}



export const updateArray = (array, obj) => {
    const index = array.findIndex((elem) => elem.id === obj.id);
    if (index === -1) {
      array.push(obj);
      localStorage.setItem(favKey, JSON.stringify(array));
    } else {
      array.splice(index, 1);
      localStorage.setItem(favKey, JSON.stringify(array));
    }
  };




//render appendChild for rekkefølge på elementer i HTML


export const renderCards = (arr) => {                           //arr referer til import

    for (let i = 0; i < arr.length; i++) {  
        const { id, name, type, base } = arr[i];                //object restructure

        //make container
        const container = document.createElement("div");
        container.classList.add("container");                   //classList gjør at den kan brukes i CSS

        //make heading
        const heading = document.createElement("h2");
        heading.innerHTML = name.english;                       //henter et objekt (nøkkel: objekt), name
        container.appendChild(heading);                         //legger objectet på toppen av container

        //create lanugages
        const langHead = document.createElement("h3");
        langHead.innerHTML = "Name in other languages";
        container.appendChild(langHead);

        const langList = document.createElement("ul");          //laget en fast li per object
        const jpn = document.createElement("li");
        const cn = document.createElement("li");
        const fr = document.createElement("li");

        jpn.innerHTML = `Japanese: ${name.japanese}`;           //"språk" + verdi
        cn.innerHTML = `Chinese: ${name.chinese}`;
        fr.innerHTML = `French: ${name.french}`;
        langList.appendChild(jpn);                              //append en list-item til listen
        langList.appendChild(cn);
        langList.appendChild(fr);
        container.appendChild(langList);                        //append til HTML

        //add separator (linje)
        const separator = document.createElement("hr");
        container.appendChild(separator);

        //add types
        const typesHead = document.createElement("h3");         //array, starter på 0
        typesHead.innerHTML = "Types";
        container.appendChild(typesHead);

        const typesList = document.createElement("ul");

        //for-loop siden vi ikke vet hvor mange types hver pkmn har
        for (let i = 0; i < type.length; i++) { 
            let li = document.createElement("li");              //lage et list element
            li.innerHTML = type [i];                            //gi det et navn??
            typesList.appendChild(li);                          //append element til liste
        }
        container.appendChild(typesList);                       //append liste til HTML

        //add another separator
        const separator2 = document.createElement("hr");
        container.appendChild(separator2);

        //add stats
        const statsHead = document.createElement("h3");
        statsHead.innerHTML = "Stats";
        container.appendChild(statsHead);

        const statsList = document.createElement("ul");         //henter ALLE verider (ligger som nr i er array)
        const statsValues = Object.values(base);                //object.values lager et array? Gjør nøkkelene om til index(tall)
        for (let i = 0; i < statsValues.length; i++) {          
            let li = document.createElement("li");
            switch(i) {                                         //switch sender inn en verdi, stemmer denne verdien overens med case=true - henter verdi
                case 0:
                    li.innerHTML = `HP: ${statsValues[i]}`;
                    break
                case 1:
                    li.innerHTML = `Attack: ${statsValues[i]}`;
                    break
                case 2:
                    li.innerHTML = `Defense: ${statsValues[i]}`;
                    break
                case 3:
                    li.innerHTML = `SP Attack: ${statsValues[i]}`;
                    break
                case 4:
                    li.innerHTML = `SP Defencs: ${statsValues[i]}`;
                    break
                case 5:
                    li.innerHTML = `Speed: ${statsValues[i]}`;
                    break
                default:                                        //må ALLTID ha default, hvis den treffer en verdi som ikke finnes
                    li.innerHTML = "unknown";
                    break;
            }
            statsList.appendChild(li);                          //append til statsList
        }
        container.appendChild(statsList);                       //append til HTML

        //append to dom
        main.appendChild(container);                            //plasserer det i HTML

        //adjust background based on type
        adjustBg(container, arr[i]);                            //bakgrunnsfargen, forteller hvilken farge som velges til hvilken pokemon
    }
};

renderCards(pokemons);

