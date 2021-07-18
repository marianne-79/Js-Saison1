// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class person {
        constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        } //The get syntax binds an object property to a function that will be called when that property is looked up.
        getName() {
          return `${this.firstName} ${this.lastName}`;
        }
        setName(newName) {
          this.firstName = newName.split(" ")[0];
          this.lastName = newName.split(" ")[1];
        }
      }
    
      document.getElementById("run").addEventListener("click", () => {
        const One = new person("Bonnie", "Clyde");
        alert (JSON.stringify(One.getName()));
        One.setName("Marianne Auquier");
        alert(JSON.stringify(One.getName()));
      });

})();
