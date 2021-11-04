// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let requestId = new Number(document.getElementById("hero-id").value);
        fetch ("http://localhost:3000/heroes" + "/" + requestId, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
    })
})();
