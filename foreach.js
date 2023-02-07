const pets = ["darren", "agatha", "johnny", "trymbi", "polly"];
console.log(pets.lenght);


pets.forEach( (pets) => {
    console.log("pets");
});




setTimeout (() => {
    console.log("It has been 4 seconds");
}, 3000);




let counter = setInterval(() => {
    console.log("starting interval");
}, 2000);

setTimeout(() => {
    clearInterval(counter);
    console.log("stopped interval")
}, 8000);