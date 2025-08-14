const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const app = express();
app.use(express.json())
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_url)
    app.listen(3000);
    console.log("listiening on port 3000");
}

main();