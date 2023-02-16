const url = "https://rickandmortyapi.com/api/";
const path = "character"

const main = document.querySelector("main");

const getCharacters = (query = "?page=0") => {
    fetch (url + path + query)
        .then((res) => {
            return res.json();
        })
        .then((data)=>{
            let results = data.results;
            console.log(results);

            let info = data.info;
            console.log(info);

            for (let i = 0; i < results.length; i++ ) {
            
            /*results.forEach((character)=>{
                if (character.status === "unknown") {
                    return;
                }*/
                if (results[i].status === "unknown") {
                    console.log("skipped");
                    continue;                                   //hopper over resten, går videre etter å ha "fjernet" status=unknown
                }
                main.innerHTML += `<div class="card">
                <p>${results[i].name}</p>
                <p>${results[i].status}</p>
                </div>`;
            }});
        }


    
getCharacters();