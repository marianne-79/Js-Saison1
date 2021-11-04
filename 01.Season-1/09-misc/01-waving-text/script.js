// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let n = document.getElementById("target");
    let m = document.getElementById("target").innerHTML;
    let p = m.split("");
    let fontSs = [30, 40, 50, 60, 70];

    n.innerHTML = "";
    
    p.forEach(letter => {
        let spanelem = document.createElement("span");
        let i = fontSs[Math.trunc(Math.random()*fontSs.length)];
        spanelem.innerHTML = letter;
        spanelem.style.fontSize = `${i}px`;
        n.appendChild(spanelem);
    })
    

})();
