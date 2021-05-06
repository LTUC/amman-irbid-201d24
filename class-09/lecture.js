'use strict';

let btn = document.getElementById('btn');
let divEl = document.getElementById('container');

let btn2 = document.getElementById('btn2');
// btn.addEventListener('click', function () {
//     let pEl = document.createElement('p');
//     divEl.appendChild(pEl);
//     pEl.textContent = "this is from js";
// })

// btn2.addEventListener('click', function () {
//     let pEl = document.createElement('p');
//     divEl.appendChild(pEl);
//     pEl.textContent = "this is from js";
// })
btn.addEventListener('click', showP);
btn2.addEventListener('click', showP);

function showP() {
    let pEl = document.createElement('p');
    divEl.appendChild(pEl);
    pEl.textContent = "this is from js";
}