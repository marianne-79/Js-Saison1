// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    ocument.getElementById("target").innerHTML = "<img src='" + document.getElementById("source").getAttribute("data-image") + "'>";
    document.getElementById("source").remove();

})();
