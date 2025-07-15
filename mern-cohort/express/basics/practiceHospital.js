const express = require('express');
const app = express();

const users = [{
    name : "john",
    kidneys : [{
        healthy: false
    }]
}]
app.get('/', function(req,res){
    const johnKidneys = users[0].kidneys;// gives an array of number of kidneys
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<numberOfKidneys; i++){
        if(numberOfKidneys){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.listen(3000);