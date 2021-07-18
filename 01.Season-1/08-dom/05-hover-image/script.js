// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    document.querySelector("figure > img").addEventListener("mouseover", (e) => {
        e.target.src = e.target.getAttribute("data-hover");
    })

})();
