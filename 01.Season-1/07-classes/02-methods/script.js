//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;       
          }
          fullName() {
            return "Hello " + this.firstName + " " + this.lastName;
          }
        
    };
        
        document.getElementById("run").addEventListener("click", () => {
            let me = new Person("Marianne", "Auquier");
            alert(JSON.stringify(me.fullName()));
        });
})();
