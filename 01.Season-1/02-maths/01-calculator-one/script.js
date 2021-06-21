
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let a = new Number(document.getElementById("op-one").value);
        let b = new Number(document.getElementById("op-two").value);
        let total = a + b ;
        alert(total);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let a = new Number(document.getElementById("op-one").value);
        let b = new Number(document.getElementById("op-two").value);
        let total = a - b ;
        alert(total);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let a = new Number(document.getElementById("op-one").value);
        let b = new Number(document.getElementById("op-two").value);
        let total = a * b ;
        alert(total);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let a = new Number(document.getElementById("op-one").value);
        let b = new Number(document.getElementById("op-two").value);
        let total = a / b ;
        alert(total);
    });
})();
