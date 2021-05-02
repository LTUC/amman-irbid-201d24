//objects

let car = ['kia', 'spectra', 2002, 5000, 'petrol', ['koria', 'gulf', 'usa'], ['shihab', 'khalid', 'suhaib']];

let kia = {
    carName: 'kia',
    carModel: 'spectra',
    carYear: 2002,
    carPrice: 5000,
    carOwners: ['shihab', 'khalid', 'suhaib']

}

let shihab = {
    userName: 'shihab',
    age: 35,
    gender: 'male',
    weight: 100,
    height: 183,
    foodLikes: ['mansaaf', 'msakhan', 'burger'],
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

let ibrhim = {
    userName: 'ibrhim',
    age: 25,
    gender: 'male',
    weight: 65,
    height: 183,
    foodLikes: ['mansaaf', 'msakhan', 'burger'],
    grades: [85, 75, 90],
    sayHi: function () {
        console.log(`hi my name is ${this.userName}`);
    },
    checkSalary: function () {
        console.log('the difference is ', shihab.services.salary - ibrhim.services.salary)
    },
    services: {
        serviceName: 'back-end developer',
        level: "mid",
        salary: 800,
        place: 'irbid'
    }


}
shihab.sayHi();
ibrhim.sayHi();
ibrhim.checkSalary();
shihab.friends = ['ibrahim', 'ahmad', '201d24 students'];
shihab.services.salary = 100;
// let userGender = shihab.gender;
delete shihab.weight;
console.log(shihab);
// console.log(shihab['height']);

// console.log(shihab.userName);
// console.log(shihab.age);
// console.log(shihab['weight']);

// console.log(shihab.foodLikes);

// for (let index = 0; index < shihab.grades.length; index++) {
//     shihab.grades[index] += 5;

// }

// console.log(shihab.services.salary);

shihab.showData = function () {
    console.log(`hi my age is ${this.age}`);
}
shihab.showData();


// console.log(this);

// const car = {
//     carName: 'bmw'
// }

// // car = { carName: 'kia' }
// // car.carName = 'kia';

// car.price = 5000;