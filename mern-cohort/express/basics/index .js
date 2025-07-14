const express = require('express');
const app = express();

// route handlers
app.get('/', function (req,res){
    res.send("hello world");
})

app.get('/asd', function(req,res){
    res.send("Hello from asd endpoint")
})

app.listen(3000);// which port