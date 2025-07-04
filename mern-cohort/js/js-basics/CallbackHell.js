// example of callback hell
/*setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Hello there");
    }, 9000);
  }, 4000);
}, 1000);
*/
// solutio for callback hell via promises
function setTimeoutPromisified(duration){
    return new Promise(resolve => setTimeout(resolve, duration))
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("Hello there");
        })
    })
})
