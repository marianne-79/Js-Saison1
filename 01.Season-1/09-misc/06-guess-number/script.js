// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    var guess = new Number(prompt ("Try to guess the number ! "));
    var guessNum = 0;
    var x = Math.floor(Math.random() *(100-1))+1;
    while (guess !== x){
        if (guess == x) {
            break;
        }
        else if ((guess < x) && (guess <= 100)){
            var guess = new Number(prompt ("To low ! Try again to guess the number ! "));
            guessNum += 1;
        }
        else if ((guess > x) && (guess <= 100)){
            var guess = new Number(prompt ("To high ! Try again to guess the number ! "));
            guessNum += 1;
        }
        else {
            var guess = new Number(prompt ("ERROR : The number you chose in above 100 ! Try again to guess the number ! "));
            guessNum += 1;
        }
    }

    if (guess == x){
        alert("That's it ! You guessed right ! You needed " + guessNum + " guesses !");
    }
    
    
})();
