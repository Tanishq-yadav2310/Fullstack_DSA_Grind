// #1 solution1 this is more tedious way to append in dom
// let cntr = 1;
// function addTodo(){
//     const inputElement = document.querySelector("input");
//     const value = inputElement.value;

//     const divElement = document.createElement("div");
//     divElement.innerHTML = `<div>${cntr+ ". " +value}</div><button onclick = 'deleteTodo(${cntr})'>delete todo</button>`;
//     divElement.setAttribute("id", cntr);
//     cntr++;
//     document.querySelector("body").appendChild(divElement);
// }

// function deleteTodo(index){
//     const element = document.getElementById(index);
//     const parentElement = element.parentNode;

//     parentElement.removeChild(element);
// }

// Solution 2 more cleaner way to append or manipulate dom

let cntr = 1;
function addTodo(){
const inputElement = document.querySelector("input");
const inputValue = inputElement.value;

const divElement = document.createElement("div");
const spanElement = document.createElement("span");
const btnElement = document.createElement("button");
spanElement.innerHTML = inputValue;
btnElement.innerHTML = "Delete todo";

divElement.appendChild(spanElement); 
divElement.appendChild(btnElement);
btnElement.setAttribute("onclick", `removeTodo(${cntr})`)
divElement.setAttribute("id", cntr);
document.querySelector("body").appendChild(divElement);
cntr++;
}
function removeTodo(index){
    const element = document.getElementById(index);
    const parentElement = element.parentNode;
    parentElement.removeChild(element);
}
