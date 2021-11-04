// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let case1 = document.getElementById("pass-one");
        let case2 = document.getElementById("pass-two");
        let passone = document.getElementById("pass-one").value;
        let passtwo = document.getElementById("pass-two").value;
        if (passone === passtwo) {
            case1.style.borderColor = "green" ;
            case2.style.borderColor = "green" ;
        }

        else {
            case1.setAttribute("class", "error");
            case2.setAttribute("class", "error");
        }
    })

})();

