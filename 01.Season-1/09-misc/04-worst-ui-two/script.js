// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    var n1 = new Number(document.getElementById("part-one").innerHTML);
    var n2 = new Number(document.getElementById("part-two").innerHTML);
    var n3 = new Number(document.getElementById("part-three").innerHTML);
    var n4 = new Number(document.getElementById("part-four").innerHTML);
    var p1 = document.getElementById("part-one");
    var p2 = document.getElementById("part-two");
    var p3 = document.getElementById("part-three");
    var p4 = document.getElementById("part-four");
    p1.addEventListener("click", () => {
        n1 += 1;
        p1.innerHTML = n1;
    });
    p2.addEventListener("click", () => {
        n2 += 1;
        if (n2 < 10) {
            p2.innerHTML = "0" + n2;
        }
        else{
            p2.innerHTML = n2;
        }
        
    });
    p3.addEventListener("click", () => {
        n3 += 1;
        if (n3 < 10) {
            p3.innerHTML = "0" + n3;
        }
        else{
            p3.innerHTML = n3;
        }
    });
    p4.addEventListener("click", () => {
        n4 += 1;
        if (n4 < 10) {
            p4.innerHTML = "0" + n4;
        }
        else{
            p4.innerHTML = n4;
        }
    });

    p1.addEventListener("click", () => {
        if (n2 < 10) {
            var m2 = "0" + n2;
        }
        if (n3 < 10) {
            var m3 = "0" + n3;
        }
        if (n4 < 10) {
            var m4 = "0" + n4;
        }
        if ((n2 < 10) && (n3 < 10) && (n4 < 10)){
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + m4;
        }
        else if ((n3 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + m4;
        }
        else if(n4 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + m4;
        }
        else if ((n2 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + m4;
        }
        else if ((n3 < 10) && (n2 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + n4;
        }
        else if(n2 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + n4;
        }
        else if(n3 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + n4;
        }
        else {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + n4;
        }
    });
    p2.addEventListener("click", () => {
        if (n2 < 10) {
            var m2 = "0" + n2;
        }
        if (n3 < 10) {
            var m3 = "0" + n3;
        }
        if (n4 < 10) {
            var m4 = "0" + n4;
        }
        if ((n2 < 10) && (n3 < 10) && (n4 < 10)){
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + m4;
        }
        else if ((n3 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + m4;
        }
        else if(n4 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + m4;
        }
        else if ((n2 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + m4;
        }
        else if ((n3 < 10) && (n2 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + n4;
        }
        else if(n2 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + n4;
        }
        else if(n3 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + n4;
        }
        else {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + n4;
        }
    });
    p3.addEventListener("click", () => {
        if (n2 < 10) {
            var m2 = "0" + n2;
        }
        if (n3 < 10) {
            var m3 = "0" + n3;
        }
        if (n4 < 10) {
            var m4 = "0" + n4;
        }
        if ((n2 < 10) && (n3 < 10) && (n4 < 10)){
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + m4;
        }
        else if ((n3 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + m4;
        }
        else if(n4 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + m4;
        }
        else if ((n2 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + m4;
        }
        else if ((n3 < 10) && (n2 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + n4;
        }
        else if(n2 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + n4;
        }
        else if(n3 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + n4;
        }
        else {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + n4;
        }
    });
    p4.addEventListener("click", () => {
        if (n2 < 10) {
            var m2 = "0" + n2;
        }
        if (n3 < 10) {
            var m3 = "0" + n3;
        }
        if (n4 < 10) {
            var m4 = "0" + n4;
        }
        if ((n2 < 10) && (n3 < 10) && (n4 < 10)){
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + m4;
        }
        else if ((n3 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + m4;
        }
        else if(n4 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + m4;
        }
        else if ((n2 < 10) && (n4 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + m4;
        }
        else if ((n3 < 10) && (n2 < 10)) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + m3 + "" + n4;
        }
        else if(n2 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + m2 + "" + n3 + "" + n4;
        }
        else if(n3 < 10) {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + m3 + "" + n4;
        }
        else {
            document.getElementById("target").innerHTML = "+0" + n1 + "" + n2 + "" + n3 + "" + n4;
        }
    });
})();
