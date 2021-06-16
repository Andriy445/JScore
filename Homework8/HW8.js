//task 1

function upperCase (string) {
    if (string.match(/^[A-Z]/)){
        console.log ("It's upper case");
}else {
    console.log ("It's lover case");
}
}
upperCase("Some text");
upperCase("some text");

// task 2

// function checkEmail (string){
//     let regExp = /./;
//   return console.log (regExp.test(string));
// }

// checkEmail("AS_+Dfs@gmail.com");

// task 3
const str = "cdbBdbsbz";
const regExp1 = /db+d/gi;
const regExp2 = /bb/gi;
const regExp3 = /d/g;


console.log (str.match(regExp1));
console.log (str.match(regExp2));
console.log (str.match(regExp3));






// task 4

const string = "JavaScript";
const firstString = /Java/g;
const secondString = /Script/g;
console.log (string.match(firstString));
console.log (string.match(secondString));
