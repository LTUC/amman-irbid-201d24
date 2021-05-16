'use strict';
let randomBtn = document.getElementById('randomizer');
randomBtn.addEventListener('click', randomizerFun);

function randomizerFun(event) {
    let audioEl = document.getElementById('song');
    audioEl.volume = Math.random();//0-1
    console.log(audioEl.volume)
}
