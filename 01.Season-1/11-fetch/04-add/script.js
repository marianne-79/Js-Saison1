// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let heroName = document.getElementById("hero-name").value;
        let heroAlterEgo = document.getElementById("hero-alter-ego").value;
        let powers = document.getElementById("hero-powers").value;
        let oderedPowers = powers.split(",");
        let newHero = {
            "name": heroName,
            "alterEgo": heroAlterEgo,
            "abilities": oderedPowers
        };
        console.log(newHero);
        
        fetch("http://localhost:3000/heroes", {
            
            method : "POST", 
        
            body : JSON.stringify(newHero),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
        
    });
})();
