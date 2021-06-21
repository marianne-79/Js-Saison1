
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE

    let confirm = false

    while (!confirm) {

        let age = prompt("Quel age as-tu ?");
        let genre = prompt("Quel est ton genre ?");
        let ville = prompt("Dans quelle ville habites-tu ?");

        let confirm = confirmation("Donc tu as " + age + "ans, tu es de genre " + genre + " et tu vis à " + ville + "!");

        if (confirm) {

            alert("Merci pour ces informations !");
        }
    }

})();
