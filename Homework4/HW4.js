//task 1

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height) ){
        throw new Error ("Incorect data");
    }
    return width * height;
}

try {
    console.log (calcRectangleArea(12, 's'));

} catch (exeption) {
    console.log (exeption.name);
    console.log (exeption.message);
    console.log (exeption.stack); 
}
//task 2

function checkAge(age) {
    if (age == ""){
        throw new Error ("The field isempty! Please enter your age");
    } else if (isNaN(age)){
        throw new Error ("Incorrect data");
    }else if (age < 14){
        throw new Error ("You are to young");
    } else{
        return alert ("Access allowed");
    }
   
    
} 


try {
 (checkAge(+prompt("Enter your age")));
} catch(exeption){
    alert (exeption.name);
    alert (exeption.message);
}
