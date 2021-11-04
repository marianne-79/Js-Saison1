// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let p = document.getElementById("validity");
    let m = document.getElementById("pass-one");
    m.addEventListener("input", () => {
        let n = document.getElementById("pass-one").value;
        let o = n.length;
        let s = n.replace(/\D/g, '').length;
        if ((o >= 8) && (s >= 2)) {
            p.innerHTML = "Ok";
        }
        else {
            p.innerHTML = "Not ok";
        }
    });
})();
