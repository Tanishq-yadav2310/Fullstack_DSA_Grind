function setTiemeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms) );
}

function callback(){
    console.log("5 seconds have passed");
}
setTiemeoutPromisified(5000).then(callback);