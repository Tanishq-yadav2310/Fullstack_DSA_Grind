const express = require("express");
const app = express();
app.use(express.json());
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys; // gives an array of number of kidneys
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (numberOfKidneys) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        heealthy : isHealthy
    })
    res.json({
        message:"updatded succesfully!"
    })
})
app.put('/', function(req,res){
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

// removes all the unhealthy kidneys
app.delete('/', function(req,res){
    const newKidneys = [];
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "done"
    })
})
app.listen(3000);
