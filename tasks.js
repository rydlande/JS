const main = document.querySelector("main");


//task 1
//write a function that reversees a number
const n = 7991;

const reversed = (n) => {
    return Number(n.toString().split("").reverse().join(""));           //toString=lager ett array med stings, split("") deler opp mellom hver karakter
};                                                                      //reverse fungerer bare på et array, join("") legger det sammen igjen(undo split)
console.log(reversed(n));



//task 2
//write a function that returns a passed string with letters in alphabetical order
const l = "potet";
const alphabetical = (l) => {
    return (l.split("").sort().join(""));
};
console.log(alphabetical(l));



//task 3
//write a function that accepts a string, and converts the first letter of each word to uppercase
const f = "this is a nice sentence";
const FirstLetter = (f) => {
    let arr = f.toString().split(" ");                                            //(" ") splitter med hvert mellomrom istedenfor hver karakter
    let newArr = [];                                                              //lage et nytt tomt array  
    arr.forEach((element) => {                                                    //henter array med ordene og lager funksjon  
        newArr.push(element.charAt(0).toUpperCase() + element.slice(1));          //pusher til nytt tomt array. Henter () karakter i string. Slice = array metode. 
    });                                                                           //slice tar bort, sp element.charAt(0) henter BARE første karakter + element.slice henter resten av ordet minus første karakter (unngå "Tthis").
                                                                                  //slice: slice(0, 1) = slice(1). Array.slice(start, end).
    /*for (let i = 0, a = arr.length; i < a; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }*/


    return newArr.join(" ");                             
};

console.log(FirstLetter(f));




//task 4
//write a function that accepts two parameterrs: an array of numbers and a number, then return a new array with numbers that are greater than the number input
const arr = [233, 24, 2, 4, 15, 73, 33, 11];
const nr = 19;

const bigger = (array, number) => {
    let newarr = [];                                                    //lag nytt tomt array

    array.forEach((n)=>{                                                //forEach er alternativ for loop
        if (n > number) {                                               //dersom n er større enn number, pusher vi den til tomt array
            newarr.push(n)
        }
    });
    return newarr;
};

console.log(bigger(arr, nr));