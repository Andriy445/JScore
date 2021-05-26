//task 1
let x = 1;
let y = 2;
const res1 = '' + x + y;
console.log(res1);
console.log(typeof (res1));

let res2 = !!x + '' + y;
console.log(res2);
console.log(typeof (res2));

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof (res3));

let res4 = String(Boolean(y)) / x;
console.log(res4);
console.log(typeof (res4));

//task 2
//a
const num = +prompt('');
if (num % 2 == 0) {
    console.log('OK');
}
//b
if (num % 7 == 0) {
    console.log('ok');
}

//task 3

const arr = [];
//1
arr[0] = 12;
//2
arr[1] = "String";
//3
arr[2] = true;
//4
arr[3] = null;
//5
console.log(arr.length);
//6
arr[4] = prompt('');
//7
console.log(arr[4]);
//8
arr.shift();
console.log(arr);

//task 4 

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));

//task 5

const isAdult = +prompt('Your age?');

if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку");

} else if (isAdult < 18) {
    console.log("Ви ще надто молоді");
} else {
    console.log('error');
}

// task 6

const a = +prompt("");
const b = +prompt("");
const c = +prompt("");

let p;
let s;
if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
    p = (a + b + c) / 2;
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(s.toFixed(3));
} else {
    alert.log("Incorrect Data");

}

if (a ** 2 == (b ** 2) + (c ** 2)) {
    console.log("Це прямокутній трикутник");
} else if (b == (a ** 2) + (c ** 2)) {
    console.log("Це прямокутній трикутник");
} else if (c == (a ** 2) + (b ** 2)) {
    console.log("Це прямокутній трикутник");

} else {
    console.log("Інакший трикутник");
}

//task 7

let date = new Date ();
let hour = date.getHours();
//a

if (hour > 23 || hour < 5) {
    console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
    console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
    console.log("Доброго дня"); {}
} else if (hour >= 17 && hour <= 23) {
    console.log("Доброго вечора");
}
//b

switch (true) {
    case (hour > 23 || hour < 5):
        console.log("Доброї ночі");
        break;
    case (hour >= 5 && hour < 11):
        console.log("Доброго ранку");
        break;
    case (hour >= 11 && hour < 17):
        console.log("Доброго дня");
        break;
    case (hour >= 17 && hour <= 23):
        console.log("Доброго вечора");
        break;
    default:
        console.log("Unknown number");
}