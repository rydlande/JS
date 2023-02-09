

//FIKK IKKE DETTE TIL
const main = document.querySelector("main");

const minAge = 18

const erro = (message, error = false) => {
    const container = document.createElement("div");
    const para = document.createElement("p");

    if (error) {
        container.classList.add("success");
        container.classList.add("error");
        para.innerHTML = `Something wnt wrong: ${message}`;
        container.appendChild(para);
        idk.appendChild(container);
        return;
    }

    container.classList.add("error");
    container.classList.add("success");
    para.innerHTML = message;
    container.appendChild(para)
    container.appendChild(container)
};

try {
    erro("yey");
} catch (err) {
    erro("damn", err);
}