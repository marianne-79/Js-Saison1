
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here

   let btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

})();
