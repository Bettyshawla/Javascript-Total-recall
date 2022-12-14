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
for (let bank = 1; bank <= 10; bank++) {
    bankAccount += bank
}
console.log(bankAccount)
//2.
let bonus = 0;
for(let pay = 1; pay <= 100; pay++ ){
    bonus += pay
    }
        console.log(bonus);
bankAccount = bonus*2

console.log(bankAccount)


// //===== III. Arrays & Control flow =======
// /*       == A. Talk about it ==
// 1. Index
// 2. Yes
// 3. Description, Items, ....
// */

//===== B. Easy Does It =====
let quotes = ["If you don't grow, you are shrinking", "Life is to short to live in the past", "YOLO"]

//===== C. Accessing elements ======
const randomThings = [1, 10, "Hello", true]

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
myArray.push("Aegon", "Betty")
//push to add item in the end of the array
myArray.shift(0)
//shift to remove the first item in the array
myArray.unshift("Bob Marley")
//unshift to add item to the beggining of the array
myArray.pop(5)
//pop it helps delete the last item in the array

// //#5 is not working
myArray.reverse();
console.log(myArray)

// //===== F. Biggie Smalls ======

let integer = [30, 54, 300, 101];

for (let q = 0; q <= integer.length; q++) {
    if (integer[q] < 100) {
        console.log(integer[q] + " little number");

    } else if (integer[q] > 100) {
        console.log(integer[q] + " big number");
    }
}

//======= G. Monkey in the Middle ========

let monkey = [1, 2, 7, 11, 12]

for (let middle = 0; middle <= integer.length; middle++) {
    if (monkey[middle] > 10) {
        console.log(monkey[middle] + " big number")
    } else if (monkey[middle] < 5) {
        console.log(monkey[middle] + " little number")
    } else {
        console.log("monkey")
    }
}
//======= H. What's in Your Closet? ========
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];
//1. 
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
//2.
kristynsCloset.splice(6, 0, "raybans")
//3.  
kristynsCloset.splice(5, 1, "staied kint hat ")
//console.log(kristynsCloset);
//4. 
console.log(thomsCloset[0][0])
//5. 
console.log(thomsCloset[1][0])
//6. 
console.log(thomsCloset[2][2])
//7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}`)
//8.
thomsCloset[1].splice(2, 1, "Footie Pajamas")

//console.log(thomsCloset)


//================ IV. Functions =================

//======= A. printGreeting ========
function printGreeting(name) {
    console.log(`Hello there,  ${name}!`);
}
printGreeting("Slimer");

//======= B. printCool ==========

function printCool(name) {
    console.log(`${name} is cool`);
}
printCool("captain Reynolds");

//======= C. calculateCube ==========
function calculateCube(numbercube) {
    console.log(Math.pow(numbercube, 2))
}
calculateCube(4)

//======= D. isVowel ==========
let vowel = ("a", "e", "i", "o", "u")
function isVowel(vowels) {
    if (vowels === "a") {
        return true
    } else if (vowels === "e") {
        return true
    } else if (vowels === "i") {
        return true
    } else if (vowels === "o") {
        return true
    } else if (vowels === "u") {
        return true
    } else {
        return false
    }
}
console.log(isVowel("a"))

//======= E. getTwoLengths==========
function getTwoLengths(str1, str2) {
    const lengthArray = [str1.length, str2.length];
    return lengthArray;
}

console.log(getTwoLengths("Hank", "Hippopopalous"))

//======= F.  getMultipleLengths ==========

function getMultipleLengths(word1, word2, word3, word4, word5) {
    const multipleArray = [word1.length, word2.length, word3.length, word4.length, word5.length];
    return multipleArray;
}
console.log(getMultipleLengths("hello", "what", "is", "up", "dude"));


//======= G. maxOfThree ==========
const maxNum = function maxOfThree(x, y, z) {
    if (x >= y) {
        return x;
    } else if (y >= z) {
        return y;
    } else if (x >= z) {
        return x;
    } else {
        return z
    }
}
console.log(maxNum(7, 9, 10));

//======= H. printLongestWord  ==========

const printLongestWord = (args) => {

    let longestWord = "";

    for (let i = 0; i < args.length; i++) {
        if (args[i].length > longestWord.length) {
            longestWord = args[i]
        }
        // return longestWord;
    }
    console.log(longestWord);
}
args = ["BoJack", "Princess", "Peanutbutter", "big", "Todd"]
printLongestWord(args)


//================  Objects =================

//======= A ========
let user = {
    firstName: 'Josh',
    email: 'josh@gmail.com',
    age: 20,
    purchased: []
}
//======= B ========
user.email = 'joshnew@gmail.com'

user.age++

console.log(user)

//======= C ========
user.location = 'Texas'

console.log(user)
//======= D ========
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")


console.log(user.purchased[2])

//======= E ========
//1.
user.friend = {
    name: 'Sam Smith',
    age: 30,
    location: "Virginia",
    purchased: []
}
//2.
console.log(user.friend.name)
//3.
console.log(user.friend.location)
//4.
user.friend.age = 55
//5.
user.friend.purchased.push("The One Ring")
//6.
user.friend.purchased.push("A latte")
//7.
console.log(user.friend.purchased[1])



//======= F ========
//1.
for (let p = 0; p < user.purchased.length; p++) {
    user.purchased[p]
    console.log(user.purchased[p])
}
//2.
for (let i = 0; i < user.friend.purchased.length; i++) {
    user.friend.purchased[i]
    console.log(user.friend.purchased[i])

}

//======= G ========

//2.
function updatedUser() {
    user.age += 1
    console.log(user.age);

}
updatedUser();

//3.

user.firstName = user.firstName.toUpperCase()

console.log(user)

//4.
function oldAndLoud(person){
    user.firstName = user.firstName + person;
console.log((user.firstName))
}
oldAndLoud(" ABES")



//============== CAT COMBINATOR ==============

//======== 1. MAMA CAT =========
const cat1 ={
    name: "Lucy",
    breed: "Orange cat",
    age: 7
}
console.log(cat1.age)
console.log(cat1.breed)


//======== 2. PAPA CAT =========

const cat2 = {
    name: "Chaps",
    breed: "blue cat",
    age: 8
}

//======== 3. COMBINE CATS =========

let combineCats = function (mama, papa){
      console.log(mama, papa) 
    
}
combineCats(cat1, cat2 )

//======== 4. CAT BRAIN BENDER =========


//console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

