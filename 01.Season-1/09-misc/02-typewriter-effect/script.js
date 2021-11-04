// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    var targetValue = document.getElementById("target").innerHTML;
    var i = 0;
    var speed = Math.trunc(Math.random()*100);
    document.getElementById("target").innerHTML="";

    function typeWriter () {
        if (i < targetValue.length) {
            document.getElementById("target").innerHTML += targetValue.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

})();
