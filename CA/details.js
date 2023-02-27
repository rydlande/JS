const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const main = document.querySelector("main");
const head = document.querySelector("head");

const id = params.get("id");



const characterCard = () => {
    fetch("https://harry-potter-api-en.onrender.com/characters/" + id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)


                const title = document.createElement("title");
                title.innerHTML = data.character;
                head.appendChild(title);
                


                const card = document.createElement("a");
                card.classList.add("character-card");
                card.innerHTML = `
                <div>
                <h2>${data.character}</h2>
                    <img 
                        src="${data.image}" 
                        alt="picture of + ${data.character}" 
                    />
                </div>
                <div>
                    <ul>
                    <li>Nickname: ${data.nickname}</li>
                    <li>House: ${data.hogwartsHouse}</li>
                    <li>Played by: ${data.interpretedBy}</li>
                    <li>Children: ${data.child}</li>
                    </ul>
                </div>`

                main.appendChild(card);
        })

        
        .catch((e) => {
            html.innerHTML = `404 Something went wrong. Please try again later.`

        })
        
    };

    characterCard();
