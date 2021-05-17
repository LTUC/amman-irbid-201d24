'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');
Coffee.drinks = [];


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
    this.name = name;
    this.size = size;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.milk = milk;

    // add every drink that gets created into an array
    Coffee.drinks.push(this);
}

// set the global array to empty


// event handler function to run every time the form is submitted
function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    // get all the values from the form
    const drink = event.target;
    const name = drink.name.value;
    const size = drink.size.value;
    const isHot = drink.isHot.checked;
    const dType = drink.drinkType.value;
    const milk = drink.milk.value;

    new Coffee(name, size, milk, isHot, dType);

    // update the previous orders with the new order
    renderOrders();

}


function renderOrders() {
    // clear all my current uls to prevent duplicate information
    orders.textContent = '';

    // go through the array and output the details of each drink in the array
    for (let i = 0; i < Coffee.drinks.length; i++) {
        const drinkLI = document.createElement('li');
        const infoP = document.createElement('p');
        let temp;
        if (Coffee.drinks[i].isHot) {
            temp = 'hot';
        } else {
            temp = 'cold';
        }
        infoP.textContent = `${Coffee.drinks[i].name} ordered a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
        drinkLI.appendChild(infoP);
        orders.appendChild(drinkLI);
    }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);