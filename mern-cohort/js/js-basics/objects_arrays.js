// objects
let userDetails = {
    userName : "Tanishq yadav",
    userId : 23102006,
    isWorking : true,
}
console.log("Name of the user is: " + userDetails.userName);
// or we can access elements of object by
console.log(userDetails["userId"]);

//arrays
let myArr = [12,23,"Tanishq"];

//Arrays assignment question
let myArray = [
    {
        usrName:"Tanishq",
        age:19,
    },
    {
        usrName:"Rampal",
        age:12,
    }
];
function checkAge(usersArr){
    for(let i =0; i<2; i++){
        if(userDetails[i].age>=18){
            console.log("Elegible for voting");
        }else{
            console.log("Not eligible for voting");
        }
    }
}

console.log(checkAge(myArr));