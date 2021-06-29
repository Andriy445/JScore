//task 1

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Incorect data");
    }
    return width * height;
}

try {
    console.log(calcRectangleArea(12, 3));

} catch (exeption) {
    console.log(exeption.name);
    console.log(exeption.message);
    console.log(exeption.stack);
}
//task 2

function checkAge(age) {
    if (age == "") {
        throw new Error("The field isempty! Please enter your age");
    } else if (isNaN(age)) {
        throw new Error("Incorrect data");
    } else if (age < 14) {
        throw new Error("You are to young");
    } else {
        return alert("Access allowed");
    }
}

try {
    (checkAge(+prompt("Enter your age")));
} catch (exeption) {
    alert(exeption.name);
    alert(exeption.message);
}

// task 3

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
class MontExeptions {
    constructor(message) {
        this.name = message;
    }
    exeption() {
        throw new Error(this.name);
    }
}

function showMonthName(month) {
    if (month >= 1 && month <= 12 ){
        return (monthNames[month - 1]);
    }
        const wrongMonth = new MontExeptions("Incorect month number");
        wrongMonth.exeption();
}
try {
    console.log(showMonthName(5));
} catch (exeption) {
    console.log(exeption.name);
    console.log(exeption.message);
}



// task 4

function showUser(id) {
    const idObj = {};
    if (id < 0) {
        throw new Error('ID must not be negative');
    }
    idObj.ID = id;
    return idObj;
}
console.log(showUser(+prompt("Your ID ?")));


let newArr = [];

function showUsers(ids) {
    let result = [];
ids.forEach(function (id) {
try {
    
}    
});
}

try {
    (showUsers([7, 2, -3, 12]));
} catch (exeption) {
    console.log(exeption.message);
} finally {
    console.log(newArr);
}

