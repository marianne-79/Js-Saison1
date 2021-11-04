// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let p = document.getElementById("counter");
    let m = document.getElementById("pass-one");
    m.setAttribute("maxlength", "10");
    m.addEventListener("input", () => {
        let n = document.getElementById("pass-one").value;
        let o = n.length;
        p.innerHTML = o + "/10"
    });


})();
