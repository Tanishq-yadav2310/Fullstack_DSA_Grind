function addTodo(){
    const inputElement = document.querySelector("input");
    const value = inputElement.value;

    const divElement = document.createElement("div");
    divElement.innerHTML = value;
    document.querySelector("body").appendChild(divElement);

}