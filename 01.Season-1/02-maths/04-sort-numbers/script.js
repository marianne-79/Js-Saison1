// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let list = document.getElementById("numbers").value;
        let split = list.split(",");

        let points =[];
        
            for (let list of split) {
                points.push(Number(list)) }
                points.sort(function (a , b) {

             if (a > b) return 1;
             if (a < b) return -1;      
                    return 0;
                });
        
        alert(points);
    });

})();
