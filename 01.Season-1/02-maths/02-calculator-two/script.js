
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let op_one = new Number(document.getElementById("op-one").value);
        let op_two = new Number(document.getElementById("op-two").value);
        
        switch (operation) {
            case "addition": return op_one + op_two;
            case "substraction": return op_one - op_two;
            case "multiplication": return op_one * op_two;
            case "division": return op_one / op_two;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () =>(alert(performOperation($btn.id)), false),
        ),
    );
})();
