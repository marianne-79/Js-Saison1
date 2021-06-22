
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

let a = new Number(document.getElementById("number").value);


    function factorial(a)
{

         if (a === 0)
  {
            return 1;
  }

            return a * factorial(a-1);
}
          alert(factorial(a));

    });

})();
