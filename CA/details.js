const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const main = document.querySelector("main");

const id = params.get("id");

fetch("https://legacy--api.herokuapp.com/api/v1/characters/" + id)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data)
        main.innerHTML = `<h1>${data.name}</h1>`;
    })
    .catch((e) => {
        main.innerHTML = `404 Not found. Wizard not in my list`;
        throw new Error(e);
    });
