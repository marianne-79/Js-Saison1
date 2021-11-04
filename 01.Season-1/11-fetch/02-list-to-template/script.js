

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(responses => responses.forEach((item) => {
                let template = document.getElementById("tpl-hero");
                let target = document.getElementById("target");
                let clone = document.importNode(template.content, true);
                let li = clone.querySelector("li");
                let title = li.querySelector("h4");
                let name = title.querySelector("strong");
                let alterEgo = title.querySelector("em");
                let powers = li.querySelector("p");
                name.innerHTML = item.name;
                alterEgo.innerHTML = item.alterEgo;
                for (i=0; i<item.abilities.length; i++){
                    powers.innerHTML += item.abilities[i] + "<br/>";
                }
                target.appendChild(clone);
            }));
    })
})();
