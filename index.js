/*
======= A =========
1. with assignment operator
2. by assigning the variable again  
3. by assigning the value of the variable to another variable using assignment operator (let and var)
4. Declare - when we declare a variable without assigning a value to it
   Assign - when we first assign a value to a variable
   Define - when we define the variable without using the assignment operators
5. Pseudocode is informal way of describing a code, it helps programmers to show how they will use the code(rough draft)
6. you should spend time analysing the code and thing you want that code to do before starting the code
*/

//======= B ========= 
let firstVariable = "Hello World";
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = "Hello";
console.log(firstVariable); //=2
const betty = 'Bethelhem Shawla';
console.log(`Hello, my name is ${betty}`)

//======= C =========
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);
console.log('Name' === 'Name');

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


//======== D ============
let animal = "cow";
animal = 'MOOOOOOO';
console.log(animal);
if (animal != "cow") {
    console.log("Hey! You're not a cow");
} else {
};

//======== E ===========

let age = 20;
if (age >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("You are underage!")
}

//========= II Loops ===========


//===== A. The basics =====

for (let i = 0; i <= 10; i++) {
    //     console.log(i)
}

for (let j = 10; j <= 400; j++) {
    //     console.log(j)
}

for (let k = 12; k < 4000; k += 3) {
    //    console.log(k)
}

//===== B. Get even =====

for (let a = 1; a <= 100; a++) {
    if (a % 2 === 0) {
        //      console.log(`${a} is an even number.`) 
    } else {
        //        console.log(a)
    }
}

//===== C. Give me Five =====

for (let b = 1; b <= 100; b++) {
    if (b % 3 === 0 && b % 5 === 0) {
      //  console.log(`I found a ${b}. High five! Three is a crowd`)

    } else if (b % 5 === 0) {
     //   console.log(`I found a ${b}. High five!`)
    } else if (b % 3 === 0) {
       // console.log(`I found a ${b}. Three is a crowd`)
    }

}
//===== D. Savings account =======
//1.
let bankAccount = 0;
for (let bank = 1; bank <= 10; bank++ ){
    bankAccount += bank
}
    console.log(bankAccount)
//2.
// let bonus = 0;
// for(let pay = 1; pay <= 100; pay*2){
   
// }
// console.log(bonus)



//===== III. Arrays & Control flow =======
/*       == A. Talk about it ==
1. Index
2. Yes
3. Description, Items, ....
*/

//===== B. Easy Does It =====
let quotes = ["If you don't grow, you are shrinking", "Life is to short to live in the past", "YOLO"]

//===== C. Accessing elements ======
const randomThings = [1, 10,"Hello", true]

//1.
console.log(randomThings[0])
//2.
randomThings[2] = "World"
//3.
console.log(randomThings)


//===== D. Change values ======

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1.
ourClass[2]
//2. 
ourClass[4] = "Octocat"
//3.
ourClass.push("Cloud City")
// console.log(ourClass)

//====== E. Mix It Up =====
const myArray = [5, 10, 500, 20];
myArray.push("Aegon","Betty")
//push to add item in the end of the array
myArray.shift(0)
//shift to remove the first item in the array
myArray.unshift("Bob Marley")
//unshift to add item to the beggining of the array
myArray.pop(5)
//pop it helps delete the last item in the array

// //#5 is not working
// Array.prototype.reverse(myArray)
// //console.log(myArray)

// //===== F. Biggie Smalls ======