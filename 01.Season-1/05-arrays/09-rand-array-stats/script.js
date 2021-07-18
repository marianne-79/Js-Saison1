// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        //display 10 elements from numbers between 1 and 100
        var arr = [];
            while(arr.length < 10){
                var r = Math.floor(Math.random() * 100) + 1;
                if(arr.indexOf(r) === -1) arr.push(r);
            }
            console.log(arr);
        
            let cells=document.getElementsByTagName("td");
            for(var i = 0; i < cells.length; i++){
                var cell = cells[i];
                cell.innerText = arr[i];
            }
            min.innerText=Math.min(...arr);
            max.innerText=Math.max(...arr);
            sum.innerText=eval(arr.join('+'));
            average.innerHTML = eval(arr.join('+')) / arr.length;
            
        console.log();
    });

})();
