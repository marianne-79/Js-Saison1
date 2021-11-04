// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var func = async () => {
            try {
                var personas = await window.lib.getPersons();
                return personas;
            } catch (error) {
                console.error(error);
            } 
        }
        func().then(console.log);
    });
})();
