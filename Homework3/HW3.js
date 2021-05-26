//task 1
//a

let num = [2, 3, 4, 5];
let multi = 1;

for (let i = 0; i < num.length  ; i++){
    multi*=num[i];
}
console.log (multi);

//b
let i = 0;

while ( i < num.length){
multi *= num[i];
i++;
}
console.log (multi);

//task 2

for (let i = 0; i <= 15;i++) {
if (i % 2 != 0) {
    console.log (`${i}-непарне число`);
} else {
    console.log (`${i}-парне число`);
}
}

//task 3
let arr = [];
function randArray(k){
    while (arr.length < k){
        let number = Math.floor(Math.random() * 500);
        arr.push(number);
    }
}
randArray(5);
console.log (arr);


//task 4

function raiseToDegree(a,b) {
if (Number.isInteger(a) && Number.isInteger(b)){
    return a **b;
}
}
console.log (raiseToDegree(3 , 4));

//task 5

function findMin() {
    let min = arguments[0];
        for (let i = 1; i < arguments.length; i++){
            if (arguments[i] < min){
                min = arguments[i];
            }
        }
        return min;
}
 console.log (findMin(12, 15, 17, 1, 7.18, 0.3, 55, 4));

 //task 6

 let uniqueArr = [1, 24, 7, 0, 3, 1];
 

 function findUnique (arr) {
    for (let i = 0; i < arr.length; i++){
       for (let j = i + 1; j < arr.length; j++) {
           if (arr[i] === arr[j]){
               return false;
           }
       }
    }
    return true;
 }
 console.log (findUnique(uniqueArr));

 //task 7

 function lastIndex (arr, i ) {
    const deleteIndex = arr.length - i;
    return arr.splice(deleteIndex);
 }
 console.log (lastIndex([55, 12, 0, 25, 9],4));
 console.log (lastIndex([55, 12, 0, 25, 9],1));
 console.log (lastIndex([55, 12, 0, 25, 9],2));

//task 8

 let string = "i love java script";

 function upperCase (string){
     let words = string.split(" ");
     for (let i = 0; i < words.length; i ++){
        words[i] = words[i].slice(0 , 1).toUpperCase() + words[i].slice(1);

     }
     return words.join(" ");
 }
console.log (upperCase(string));
 