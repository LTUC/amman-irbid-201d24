// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects 
'use strict';
let kittenArray = [];
function Kitten(catName, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
  this.catName = catName;
  this.likes = likes;
  this.img = img;
  this.age = 0;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.breed = breed;
  kittenArray.push(this);
}
Kitten.prototype.getAge = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  this.age = Math.floor(Math.random() * (max - min + 1) + min);
}
Kitten.prototype.render = function () {

  let divEl = document.getElementById('kittenProfiles');
  let articleEl = document.createElement('article');
  divEl.appendChild(articleEl);
  let h2El = document.createElement('h2');
  h2El.textContent = this.catName;
  articleEl.appendChild(h2El);
  let pEl = document.createElement('p');
  pEl.textContent = `i am ${this.age} months old.`
  articleEl.appendChild(pEl);
  let ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < this.likes.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = this.likes[i];
    ulEl.appendChild(liEl)
  }
  let tableEl = document.createElement('table');
  articleEl.appendChild(tableEl);
  let tableHeader = document.createElement('tr');
  tableEl.appendChild(tableHeader);

  let thEl1 = document.createElement('th');
  thEl1.textContent = 'isGoodWithKids';
  tableHeader.appendChild(thEl1);

  let thEl2 = document.createElement('th');
  thEl2.textContent = 'isGoodWithDogs';
  tableHeader.appendChild(thEl2);

  let thEl3 = document.createElement('th');
  thEl3.textContent = 'isGoodWithOtherCats';
  tableHeader.appendChild(thEl3);

  let tableBody = document.createElement('tr');
  tableEl.appendChild(tableBody);

  let td1 = document.createElement('td');
  tableBody.appendChild(td1);
  td1.textContent = this.isGoodWithKids;

  let td2 = document.createElement('td');
  tableBody.appendChild(td2);
  td2.textContent = this.isGoodWithDogs;

  let td3 = document.createElement('td');
  tableBody.appendChild(td3);
  td3.textContent = this.isGoodWithOtherCats;



  let imgEl = document.createElement('img');
  articleEl.appendChild(imgEl);
  imgEl.setAttribute('src', `${this.img}`);
}
// console.log('before', kittenArray)
let frankie = new Kitten('frankie', ['eating', 'sleeping', 'playing'], 'images/frankie.jpeg', true, true, false, 'baldee');
frankie.getAge(1, 12);
frankie.render();
let jumper = new Kitten('jumper', ['eating', 'fighting', 'playing'], 'images/jumper.jpeg', true, false, false, 'sheraz');
jumper.getAge(1, 5);
jumper.render();

let serena = new Kitten('serena', ['eating', 'sleeping', 'napping'], 'images/serena.jpeg', true, true, true, 'baldee');
serena.getAge(1, 6);
serena.render();
// console.log(kittenArray)
// let frankie = {
//   catName: 'frankie',
//   age: 0,
//   friends: [],
//   likes: ['eating', 'sleeping', 'playing'],
//   img: 'images/frankie.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   isGoodWithOtherCats: false,
//   breed: 'baldee',
//   getAge: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     this.age = Math.floor(Math.random() * (max - min + 1) + min);
//   }, addingFriends: function () {
//     this.friends.push('shihab');
//   }
//   ,
//   render: function () {
//     let divEl = document.getElementById('kittenProfiles');
//     let articleEl = document.createElement('article');
//     divEl.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.catName;
//     articleEl.appendChild(h2El);
//     let pEl = document.createElement('p');
//     pEl.textContent = `i am ${this.age} months old.`
//     articleEl.appendChild(pEl);
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = this.likes[i];
//       ulEl.appendChild(liEl)
//     }
//     let imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', `${this.img}`);
//   }
// }
// let jumper = {
//   catName: 'jumper',
//   age: 0,
//   likes: ['eating', 'fighting', 'playing'],
//   img: 'images/jumper.jpeg',
//   isGoodWithKids: false,
//   isGoodWithDogs: true,
//   isGoodWithOtherCats: true,
//   breed: 'sheraz',
//   getAge: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     this.age = Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   render: function () {
//     let divEl = document.getElementById('kittenProfiles');
//     let articleEl = document.createElement('article');
//     divEl.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.catName;
//     articleEl.appendChild(h2El);
//     let pEl = document.createElement('p');
//     pEl.textContent = `i am ${this.age} months old.`
//     articleEl.appendChild(pEl);
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = this.likes[i];
//       ulEl.appendChild(liEl)
//     }
//     let imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', `${this.img}`);
//   }
// }
// let serena = {
//   catName: 'serena',
//   age: 0,
//   likes: ['eating', 'sleeping', 'playing'],
//   img: 'images/serena.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   isGoodWithOtherCats: false,
//   breed: 'baldee',
//   getAge: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     this.age = Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   render: function () {
//     let divEl = document.getElementById('kittenProfiles');
//     let articleEl = document.createElement('article');
//     divEl.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.catName;
//     articleEl.appendChild(h2El);
//     let pEl = document.createElement('p');
//     pEl.textContent = `i am ${this.age} months old.`
//     articleEl.appendChild(pEl);
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.likes.length; i++) {
//       let liEl = document.createElement('li');
//       liEl.textContent = this.likes[i];
//       ulEl.appendChild(liEl)
//     }
//     let imgEl = document.createElement('img');
//     articleEl.appendChild(imgEl);
//     imgEl.setAttribute('src', `${this.img}`);
//   }
// }

// frankie.getAge(1, 6);
// frankie.render();

// jumper.getAge(1, 6);
// jumper.render();

// serena.getAge(1, 6);
// serena.render();
// attach those elements to the parent in the DOM.




// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild

let kittenForm = document.getElementById('kittinForm');
kittenForm.addEventListener('submit', addAKitten);
function addAKitten(event) {
  event.preventDefault();
  // let frankie = new Kitten('frankie', ['eating', 'sleeping', 'playing'], 'images/frankie.jpeg', true, true, false, 'baldee');
  // frankie.getAge(1, 12);
  // frankie.render();
  let catName = event.target.banana.value;
  let likes = event.target.likes.value.split(',');
  let img = event.target.img.value;
  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithOtherCats = event.target.isGoodWithOtherCats.checked;
  let breed = event.target.breed.value;

  let newCat = new Kitten(catName, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed)
  newCat.getAge(1, 12);
  newCat.render();

  // console.log(likes);
}