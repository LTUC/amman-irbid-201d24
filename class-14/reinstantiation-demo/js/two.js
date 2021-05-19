'use strict';

const catbutton = document.getElementById('catbutton');

const handleCatButtonClick = function () {
  //to check if the localStorage have any values or it's empty
  //if we test it as null it will give an error so we need to console log it first
  console.log(localStorage.cats);

  if (localStorage.cats !== undefined) {
    const catsFromLS = JSON.parse(localStorage.cats);
    console.log('allCats array after retrieving from local storage', allCats);
    for (let i = 0; i < catsFromLS.length; i++) {
      const newCat = new Cat(catsFromLS[i].name);
      newCat.render();

      // new Cat(catsFromLS[i].name);
      // allCats[i].render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', allCats);
  }
};

catbutton.addEventListener('click', handleCatButtonClick);
