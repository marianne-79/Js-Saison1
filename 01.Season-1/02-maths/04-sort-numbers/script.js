// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let list = document.getElementById("numbers").value;
        let total = list.split(",");

        const points =[];
        
            for (let num of total) {
                points.push(Number(num));
            }
        points.sort;
        
        alert(total);
    });

})();
