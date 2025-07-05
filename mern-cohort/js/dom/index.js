function addTodo(){
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);
    // in same way we can use getEkementById and getElementByClassName  if we wnt to get any tag or element by its class or id.
}
let cntr = 0;
function callback(){
    const tag = document.querySelector(".counter");
    tag.innerHTML = cntr;
    //cntr++; uncomment it when to use either it will run forever
}
setInterval(callback, 1000);