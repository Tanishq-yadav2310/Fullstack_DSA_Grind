// example of callback hell
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Hello there");
    }, 9000);
  }, 4000);
}, 1000);
