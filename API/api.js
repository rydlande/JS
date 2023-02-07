const url = "https://api.spaceflightnewsapi.net/v3/articles";

const main = document.querySelector("main");


const getArticles = async () => {
    const res = await fetch(url);        //før du går videre, vent til den har hentet url
    console.log(res);                    //får et løfte om å få et svar/at noe skal bli gjort "promise"
    const data = await res.json();
    console.log(data);
    data.forEach((element) => {
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
        const { title, imageUrl, newsSite, summary, url, } = element;
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = `
        <div class="card--header">
          <img
            src="${imageUrl}"
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

        /*
        const date = document.createElement("date");
        date.src = Date.parse(element.publishedAt);
        console.log(date.src);
        */


        let utcDate = new Date(element.publishedAt);
        let localDate = new Date(
            utcDate.getFullYear(),
            utcDate.getMonth(),
            utcDate.getDate(),
            utcDate.getHours(),
            utcDate.getMinutes(),
            utcDate.getSeconds()
         );
         console.log(localDate);



        main.appendChild(container);
    });
};

getArticles();