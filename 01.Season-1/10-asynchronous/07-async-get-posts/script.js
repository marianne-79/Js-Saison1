// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var func = async () => {
            return articles = await Promise.resolve(window.lib.getPosts());
        };

        func().then(console.log);
    });
})();
