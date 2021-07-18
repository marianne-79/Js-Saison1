
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year= document.getElementById("dob-year").value;
       
        let current_date= new Date(year, month, day, "13","00","00","00");
        //console.log (current_date.getTime());

        function ageCalculator() {  
            
            //calculate month difference from current date in time  
            var month_diff = Date.now() - current_date.getTime();  
              
            //convert the calculated difference in date format  
            var age_dt = new Date(month_diff);   
              
            //extract year from date      
            var y = age_dt.getUTCFullYear();  
              
            //now calculate the age of the user  
            var age = Math.abs(y - 1970);  
              
            alert ("Age is: " + age + " years. ");
           
            
            
        }
        ageCalculator();
    }); 

})();
