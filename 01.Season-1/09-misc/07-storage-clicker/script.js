// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    if (typeof(Storage) !== "undefined") {
        document.getElementById("target").innerHTML = localStorage.getItem("currentValue");
    }
    
    let targetValue = new Number (document.getElementById("target").innerHTML);

    document.getElementById("increment").addEventListener("click", () => {
        targetValue += 1;
        document.getElementById("target").innerHTML = targetValue;
        localStorage.setItem("currentValue", targetValue);
    });
})();
