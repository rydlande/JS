const url = "https://api.spaceflightnewsapi.net/v3/articles";

const main = document.querySelector("main");


const getArticles = (data) => {                               //async (await) - async gjør ingenting, men gjør at vi kan bruke await (vi byttet den ut med fetch senere)
    /*const res = await fetch(url);                           //await - før du går videre, vent til den har hentet url
    console.log(res);                                         //får et løfte om å få et svar/at noe skal bli gjort "promise"
    const data = await res.json();
    console.log(data);*/

    data.forEach((element) => {                               //forEach - går gjennom hvert element i et array
        /*
        const container = document.createElement("div");
        container.classList.add("container");

        const image = document.createElement("img");
        image.src = obj.imageUrl;
        image.classList.add("img");
        container.appendChild(image);

        const heading = document.createElement("h2");
        heading.innerHTML = obj.title;
        container.appendChild(heading);

        const summary = document.createElement("p");
        summary.innerHTML = obj.summary;
        container.appendChild(summary);

        const author = document.createElement("author");
        author.innerHTML = `Author: ${obj.newsSite}`;
        container.appendChild(author);
        */
       
        const { title, imageUrl, newsSite, summary, url, publishedAt} = element;   //objects destructuring
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = `
        <div class="card--header">
          <img
            src="${imageUrl}"                                   //henter en variabel fra en 
            alt="${title} ${newsSite}"
          />
        </div>
        <div class="card--body">
          <h2>${title}</h2>
          <div class="card--body__summary">
            ${summary}
          </div>
          <div class="card--body__details">
            <p><span class="author">Author:</span> ${newsSite}</p>
          
            <a href="${url}" target="_blank">Read More</a>
          </div>
        </div>`

        /* DATO FØRSTE FORSØK (millisekund)
        const date = document.createElement("date");
        date.src = Date.parse(element.publishedAt);
        console.log(date.src);
        */

        /* DATO ANDRE FORSØK (fungerer ish, men dårlig)
        let utcDate = new Date(element.publishedAt);
        let localDate = new Date(
            utcDate.getFullYear(),
            utcDate.getMonth(),
            utcDate.getDate(),
            utcDate.getHours(),
            utcDate.getMinutes(),
            utcDate.getSeconds()
         );
         console.log(localDate);*/

         const d = new Date(publishedAt).toLocaleDateString('en-EU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
          console.log(d);



        main.appendChild(container);
    });
};


//getArticles();            //trenger ikke den når vi bruker en fetch


fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    getArticles(data);
  })
  .catch((e) => {
    main.innerHTML = `Sorry, there seems to been a mistake - please try again later`
  });