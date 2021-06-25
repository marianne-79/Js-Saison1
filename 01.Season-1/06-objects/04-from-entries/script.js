// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", () => {

    let array = [];
    
    /*["name","Skitty"],
    ["species","cat"],
    ["age", 9], 
    ["gender","female"],
    ["color","tabby"];*/

    for (let i = 0; i < keys.length; i++) {
        array.push ( [keys [i], values[i] ] )
        
    }

    const truc = Object.fromEntries(array);  

    console.log(truc);
    });
    
   
})();
