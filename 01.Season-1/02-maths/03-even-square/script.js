
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        function square() {
            let num = 21;
            let msg = "";
            let total = "0";

        for (let x = 1; x <= num; x++)    
{
    total = x * x;
    msg = msg + " " + x + " * " + x + " = " + total + "\num";
}
 alert(msg);
        }
square();
    });

})();
