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
let frankie = {
  catName: 'frankie',
  age: 0,
  friends: [],
  likes: ['eating', 'sleeping', 'playing'],
  img: 'images/frankie.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithOtherCats: false,
  breed: 'baldee',
  getAge: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.age = Math.floor(Math.random() * (max - min + 1) + min);
  }, addingFriends: function () {
    this.friends.push('shihab');
  }
  ,
  render: function () {
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
    let imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src', `${this.img}`);
  }
}
let jumper = {
  catName: 'jumper',
  age: 0,
  likes: ['eating', 'fighting', 'playing'],
  img: 'images/jumper.jpeg',
  isGoodWithKids: false,
  isGoodWithDogs: true,
  isGoodWithOtherCats: true,
  breed: 'sheraz',
  getAge: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.age = Math.floor(Math.random() * (max - min + 1) + min);
  },
  render: function () {
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
    let imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src', `${this.img}`);
  }
}
let serena = {
  catName: 'serena',
  age: 0,
  likes: ['eating', 'sleeping', 'playing'],
  img: 'images/serena.jpeg',
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithOtherCats: false,
  breed: 'baldee',
  getAge: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.age = Math.floor(Math.random() * (max - min + 1) + min);
  },
  render: function () {
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
    let imgEl = document.createElement('img');
    articleEl.appendChild(imgEl);
    imgEl.setAttribute('src', `${this.img}`);
  }
}

frankie.getAge(1, 6);
frankie.render();

jumper.getAge(1, 6);
jumper.render();

serena.getAge(1, 6);
serena.render();
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
