// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    document.getElementById("slider").addEventListener("input", () => {
        var Slidevalue = document.getElementById("slider").value;
        function updateTextInput(val) {
            document.getElementById("target").innerHTML = "0" + val;
        }
        updateTextInput(Slidevalue);
    })
})();
