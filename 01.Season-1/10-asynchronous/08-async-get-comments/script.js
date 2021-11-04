// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var func = async () => {
            var articles = await Promise.resolve(window.lib.getPosts());
            for (article of articles) {
                var commentaries = await Promise.resolve(window.lib.getComments(article.id));
                article.comments = commentaries;
            }
            return articles;
        }

        func().then(console.log);
    });
})();
