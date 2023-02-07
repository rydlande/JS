//lession 1
document.querySelector("h3");
const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";



//lession 2
const headings = document.querySelectorAll("h4");
for (let i = 0; i < headings.length; i++) {
    headings[i].style.marginBottom = "-20px";
}



//lession 3
const twoHeading = document.querySelector(".two");
twoHeading.style.background = "red";

//or
headings[1].style.backgroundColor = "red";



//lession 4 
const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[0].style.color = "blue";
    paragraph[0].style.fontSize = "24px";
}

//or
const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";



//lession 5
const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;



//lession 6 (fungerer ikke)
const content = document.querySelector(".content");
content.innerHTML += "<p>Another paragraph</p>";

//or 
content.innerHTML = content.innerHTML + "<p>Another paragraph</p>";



//lession 7
const contentParagraphs = document.querySelectorAll(".content p");
for (let i = 0; i < contentParagraphs; i++) {
    contentParagraphs[i].classList.add("content-item");
}



//lession 8
const list = document.querySelector("#services");
list.innerHTML = `<li>New item</li> ${list.innerHTML}`;



//lession 9
list.classList.remove("service-list");



//lession 10
const idHide = document.querySelector("#hide");
idHide.style.display = "none";