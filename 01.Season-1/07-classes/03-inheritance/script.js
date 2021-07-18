// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal{
        constructor(name){
            super(),
            this.name=name
        }
        static greeting = "Miaou"
    }
    class Dog extends Animal{
        constructor(name){
            super(),
            this.name = name
        }
        static greeting = "wouaf wouaf"
    }
    document.getElementById("run").addEventListener("click", () => {
        let nameCat = new Cat("Clyde");
        let nameDog = new Dog("Mojo");
        alert(JSON.stringify(nameCat.sayHello()));
        alert(JSON.stringify(nameDog.sayHello()));
      });
})();
