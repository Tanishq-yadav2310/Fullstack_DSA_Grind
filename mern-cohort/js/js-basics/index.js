let a = 23; // we change the value of this afterwards when we want
const b = 12; // we cannot change its value after it is declared and assigned the value
var c = 39; // older way of ddeclaring variables

//Functions in js
function greet(name){
    return "Hello " + name;
}

let messagge = greet("Tanishq");

function sum(a,b){
    let totalSum = a + b;
    return totalSum;
}
let ans = sum(3,5);

function canVote(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}
let vote = canVote(21);

//loops

let names = ["tanishq", "harkirat", "kirat"];
for(let i = 0; i<3; i++){
    console.log(names[i]);
}
let j = 0;
while(j<3){
    console.log(names[i]);
    i++;
}