// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        nom: "Auquier",
        prenom: "Marianne",
        surnom: "Ma",
        age: "158",
        planete: "Mars",
        status: "E.T",
    };
    // your code here

    for(const key in person) {
        console.log(key, person[key])
    }
})();
