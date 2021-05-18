'use strict';

const allCats = [];
const catform = document.getElementById('catform');
const catlist = document.getElementById('catlist');

function Cat(name) {
  this.name = name;
  allCats.push(this);
  settingToLocalStorage();
}
Cat.prototype.render = function () {
  const listItem = document.createElement('li');
  listItem.textContent = this.name;
  catlist.appendChild(listItem);
}

function handleCatSubmit(e) {
  e.preventDefault();
  const newCat = new Cat(e.target.kitten.value);
  catform.reset();
  newCat.render();
  //we can call it here as well 
  // settingToLocalStorage();
}

function settingToLocalStorage() {

  let data = JSON.stringify(allCats);
  console.log(data)
  localStorage.setItem('cats', data);

  // localStorage.cats = JSON.stringify(allCats);
  // console.log('this is what is in local storage', localStorage.cats);

}