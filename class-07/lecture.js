'use strict';
// let shihab = {
//     stdName: 'shihab',
//     age: 35,
//     grade: 95
// }
// let emad = {
//     stdName: 'emad',
//     age: 25,
//     grade: 100
// }
// let ibrahim = {
//     stdName: 'ibrahim',
//     age: 28,
//     grade: 96
// }

let students = [];
function Student(stdName, age, grade) {
    this.stdName = stdName;
    this.age = age;
    this.grade = grade;
    this.school = 'asac';
    students.push(this);
}
Student.prototype.sayHi = function () {
    console.log(`hi my name is ${this.stdName}`);
}
Student.prototype.saySchool = function () {
    console.log(`hi my school name is ${this.school}`);
}
let shihab = new Student('shihab', 35, 95);
let emad = new Student('emad', 25, 100);
let ibrahim = new Student('ibrahim', 28, 96);
let samah = new Student('samah', 28, 96);
let sara = new Student('sara', 24, 86);

shihab.sayHi();
emad.sayHi();
// Student.sayHi();//error
// let students = [shihab, emad, ibrahim];
console.log(students);

let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let tr1 = document.createElement('tr');
table.appendChild(tr1);
let th1 = document.createElement('th');
tr1.appendChild(th1);
th1.textContent = 'name';
let th2 = document.createElement('th');
tr1.appendChild(th2);
th2.textContent = 'age';
let th3 = document.createElement('th');
tr1.appendChild(th3);
th3.textContent = 'grade';

for (let std = 0; std < students.length; std++) {

    let stdRow = document.createElement('tr');
    table.appendChild(stdRow);

    let nameTd = document.createElement('td');
    stdRow.appendChild(nameTd);
    nameTd.textContent = students[std].stdName;

    let ageTd = document.createElement('td');
    stdRow.appendChild(ageTd);
    ageTd.textContent = students[std].age;

    let gradeTd = document.createElement('td');
    stdRow.appendChild(gradeTd);
    gradeTd.textContent = students[std].grade;
}

