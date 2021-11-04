// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var requestId = new Number(document.getElementById("hero-id").value);
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
                let Id = item.id;
                name.innerHTML = item.name;
                alterEgo.innerHTML = item.alterEgo;
                for (i=0; i<item.abilities.length; i++){
                    powers.innerHTML += item.abilities[i] + "<br/>";
                }
                if (requestId == Id) {
                    target.appendChild(clone);
                }
            }));
    })
})();
