//task 1
// let id = document.getElementById("test");
// id.innerHTML = "Last";

// let tag = document.getElementsByTagName("div");
// tag[0].innerHTML = "Last";

//task 2

// let img = document.querySelector(".image");
// img.setAttribute("src", "cat.jpg");
// alert(img.outerHTML);

//task 3

//  let text = document.querySelectorAll("#text p");
// for (let i = 0; i < text.length; i++){
//     console.log (`Selector text ${i} : ${text[i].innerHTML}`);
// }


//task 4

//a
// let list = document.querySelectorAll("#list li");
//  alert (list [0].innerHTML);
//  alert (list [4].innerHTML);
//  alert (list [1].innerHTML);
//  alert (list [3].innerHTML);
//  alert (list [2].innerHTML);
 
//b
// let nodeList = document.getElementById("list");
// alert (nodeList.firstElementChild.textContent);
// alert (nodeList.lastElementChild.textContent);
// alert (nodeList.firstElementChild.nextElementSibling.textContent);
// alert (nodeList.lastElementChild.previousElementSibling.textContent);
// alert (nodeList.lastElementChild.previousElementSibling.previousElementSibling.textContent);


// task 5

// let header = document.querySelector("h1");
// header.style.backgroundColor = "LightGreen";

// let paragraphs = document.querySelectorAll("#myDiv p");
// paragraphs[0].style.fontWeight = "bold";
// paragraphs[1].style.color = "red";
// paragraphs[2].style.textDecoration = "underline";
// paragraphs[3].style.fontStyle = "italic";

// let myList = document.querySelectorAll("#myList li");
// let ulText = document.querySelector('ul'); 

// ulText.textContent = `${myList[0].textContent} ${myList[1].textContent} ${myList[2].textContent} `;

// let span = document.querySelector("span");
// span.style.color = "white";


// task 6

// let inputs = document.querySelectorAll("input");

// inputs.forEach (function(element){
//     element.value = prompt('');
// });

// let imput1 = inputs[0].value;
// let imput2 = inputs[1].value;
// let temp = imput1;
// imput1 = imput2;
// imput2 = temp;


// task 7
let body = document.querySelector("body");

let newMain = document.createElement("main");
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");

newMain.className = "mainClass check item";
newDiv.id = "myDiv";
newParagraph.innerHTML = "First paragraph";

body.prepend(newMain);
newMain.after(newDiv);
newDiv.after(newParagraph);




console.log (body);






