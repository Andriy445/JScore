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
const num = +prompt ('');
if (num % 2 == 0){
console.log ('OK');
}
//b
if (num % 7 == 0) {
    console.log ('ok');
}

//task 3

const arr = [];
//1
arr[0] = 12;
//2
arr [1] = "String";
//3
arr[2] = true;
//4
arr [3] = null;
//5
console.log (arr.length);
//6
arr [4] = prompt ('');
//7
console.log (arr[4]);
//8
arr.shift();
console.log(arr);