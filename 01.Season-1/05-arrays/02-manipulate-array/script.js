// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {

let last = fruits.pop();
let first = fruits.shift();

alert(fruits);

let newLength1 = fruits.push("kiwi");
let newlength2 = fruits.unshift("banana");


console.log(fruits);
   
    });

})();
