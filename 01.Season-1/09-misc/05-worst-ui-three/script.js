// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var p4 = 0;

    // your code here
    var ran1 = setInterval(function() {
        var n = Math.floor(Math.random() * (499 - 460)) + 460;
        document.getElementById("part-one").value = n;
        p1 = n;
    }, 100);
    var ran2 =setInterval(function() {
        var n = Math.floor(Math.random() *99);
        if (n < 10){
            document.getElementById("part-two").value = "0" + n;
            p2 = "0"+n;
        }
        else {
            document.getElementById("part-two").value = n;
            p2 = n;
        }
    }, 100);
    var ran3 = setInterval(function() {
        var n = Math.floor(Math.random() *99);
        if (n < 10){
            document.getElementById("part-three").value = "0" + n;
            p3 = "0" + n;
        }
        else {
            document.getElementById("part-three").value = n;
            p3 = n;
        }
    }, 100);
    var ran4 = setInterval(function() {
        var n = Math.floor(Math.random() *99);
        if (n < 10){
            document.getElementById("part-four").value = "0" + n;
            p4 = "0" + n;
        }
        else {
            document.getElementById("part-four").value = n;
            p4 = n;
        }
    }, 100);

    document.getElementById("fix-part-one").addEventListener("click", () => {
        clearInterval(ran1);
        document.getElementById("target").innerHTML = "+0" + p1 + p2 + p3 + p4;
    });
    document.getElementById("fix-part-two").addEventListener("click", () => {
        clearInterval(ran2);
        document.getElementById("target").innerHTML = "+0" + p1 + p2 + p3 + p4;
    });
    document.getElementById("fix-part-three").addEventListener("click", () => {
        clearInterval(ran3);
        document.getElementById("target").innerHTML = "+0" + p1 + p2 + p3 + p4;
    });
    document.getElementById("fix-part-four").addEventListener("click", () => {
        clearInterval(ran4);
        document.getElementById("target").innerHTML = "+0" + p1 + p2 + p3 + p4;
    });
})();
