const axios = require('axios');

// using fetch
// async function main(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data.length)
// }

// using axios
async function main(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data.length)
}

// post request through axios
// format:-
// async postFunction(){
//     const response = axios.post("url", { //body }, { //headers });
// }
main();