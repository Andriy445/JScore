//task 2
console.log("Shushniak");

// task 3 

//a)
let first = 12;
let second = 'String';
//c
alert(first);
alert(second);
//d
first = second;
//e
alert(first);
alert(second);

//task 4

const obj = {
    string: 'text',
    number: 22,
    boolean: true,
    null: null,
    undefined
};

//task 5

const isAdult = confirm('Are you an adult?');
console.log(isAdult);

//task 6

const myName = 'Andriy',
    surname = "Shushniak",
    group = "602 JS core",
    birthYear = 1996,
    isMaried = false;

console.log(typeof (birthYear), typeof (isMaried), typeof (myName), typeof (surname), typeof (group));

const nullType = null;
let undefinedType;
console.log(typeof (nullType), typeof (undefinedType));

//task 7 

// const login = prompt ('Your login?');
// const email = prompt ('Your email?');
// const password = prompt ('Your password?');
// alert (`Dear ${login}, your email is ${email}, your password is ${password}`);

//task 8 

let hour = 60 * 60;
alert (hour);
let day = hour * 24;
alert (day);
let month = day * 30;
alert (month);