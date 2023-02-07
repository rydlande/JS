//MODULE 1

//lession 1
const instrument = "guitar";
console.log(instrument);


//lession 2
const button = document.querySelector("button.login");
console.log(button);


//lession 3
const instruments = [
    {
        type: "guitar",
        color: "red",
    },
    {
        type: "piano",
        color: "black",
    },
];

console.table(instruments);


//lession 4
const name = "Percival";
let age = 13;


//lession 5
let total = 0;
total = total + 10;


//lession 6
for (let i = 0; i <= 5; i++) {
    console.log(i);
}


//lession 7
const firstName = "Florence";
const introduction = `Hello, my name is ${firstName}.`;

console.log(introduction);


//lession 8
const title = "Big Technical Event";
const whatToHave = "good time";
const welcome = `Welcome! 
This ${title} is starting today. 
Have a ${whatToHave}!`;

console.log(welcome);


//lession 9
const car = {
    "paint-color": "red",
    "number of wheels": 3
};

console.log(car["paint-color"]);
console.log(car["number of wheels"]);


//lession 10
const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false,
    getExpired: function() {
        console.log(this.expired);
    }
};

product.getExpired();