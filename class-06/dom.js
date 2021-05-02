//DOM document object model
let shihab = {
    userName: 'shihab',
    age: 35,
    gender: 'male',
    weight: 100,
    height: 183,
    foodLikes: ['mansaaf', 'msakhan', 'burger', 'shawarmah'],
    grades: [85, 75, 90],
    sayHi: function () {
        console.log(`hi my name is ${shihab.userName}`);
    },
    services: {
        serviceName: 'front-end developer',
        level: "mid",
        salary: 1000,
        place: 'irbid'
    }

}
let divElUl = document.getElementById('foodLikes')
let ulEl = document.createElement('ul');
divElUl.appendChild(ulEl);

for (let i = 0; i < shihab.foodLikes.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = shihab.foodLikes[i];
    ulEl.appendChild(liEl);
}
// let liEl2 = document.createElement('li');
// liEl2.textContent = shihab.foodLikes[1];
// ulEl.appendChild(liEl2);
// let liEl3 = document.createElement('li');
// liEl3.textContent = shihab.foodLikes[2];
// ulEl.appendChild(liEl3);
// let liEl4 = document.createElement('li');
// liEl4.textContent = shihab.foodLikes[3];
// ulEl.appendChild(liEl4);


// document.write('<h3>hello</h3>');

let myData = document.getElementById('myData');
// console.log(typeof myData);
console.log(myData);

// let myName = prompt('please enter your name?')
// myData.textContent = shihab.userName;
// myData.textContent = myName;



let h1El = document.createElement('h1');
h1El.textContent = 'welcome to my site';

let divEl = document.getElementById('container');
// console.log(divEl)
// divEl.textContent = h1El;
// divEl.textContent = h1El.textContent;
divEl.appendChild(h1El);
