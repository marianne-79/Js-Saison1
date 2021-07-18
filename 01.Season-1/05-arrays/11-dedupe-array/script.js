// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    ocument.getElementById("run").addEventListener("click", () => {
        const map = {};
        const newArray = [];
        fruits.forEach(el => {
            if(!map[JSON.stringify(el)]){
                map[JSON.stringify(el)] = true;
                newArray.push(el);
        }
        });
        alert(newArray);
    });

})();
