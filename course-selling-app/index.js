const express = require('express');
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const app = express();

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://admin:Br7eyIn3ytJfMpa1@cluster0.gnjiedu.mongodb.net/todo-tanishq-12")
    app.listen(3000);
    console.log("listiening on port 3000");
}

main();