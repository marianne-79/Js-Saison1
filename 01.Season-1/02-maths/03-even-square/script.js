
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        function square() {
            let n = 21;
            let msg = "";
            let total = "0";

        for (let x = 1; x <= n ; x++)    
{
    total = x * x;
    msg = msg + " " + x + " * " + x + " = " + total + "\n";
}
 alert(msg);
        }
square();
    });

})();
