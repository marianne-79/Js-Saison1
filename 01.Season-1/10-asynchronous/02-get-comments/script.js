// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts(function(error, articles){
            articles.forEach (article => window.lib.getComments(article.id, function(error, comments){article.comments = comments;}));
            console.log(articles); 
        });
        
    });
})();
