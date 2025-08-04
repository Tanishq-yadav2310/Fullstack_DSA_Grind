const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'asdasd@123123';
const {UserModel, TodoModel} = require('./db ');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:Br7eyIn3ytJfMpa1@cluster0.gnjiedu.mongodb.net/todo-tanishq-12')

app.use(express.json());

app.post('/signup', async function (req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name:name    
    })
    res.json({
        message:"signup success"
    })

});

app.post('/signin', async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
})

// auth verifying middleware
function auth(req,res,next){
    const token = req.headers.token;
    const user = jwt.verify(token, JWT_SECRET);

    if(user){
        req.userId = token.id
        next();
    }else{
        res.json({
            message:'incorrect credentials'
        })
    }
}

app.post('/todos', auth, async function(req,res){
    const title = req.body.title;
    const userId = req.userId;

    await TodoModel.create({
        title,
        userId,
        message:'databases connection success'
    })
})

app.get('/todos', auth, async function(req,res){
    const userId = req.userId;
    const todos =  TodoModel.find({
        userId:userId
    })
    res.json({
        todos
    })
})

app.listen(3000)