const { Router } = require('express');
const { userModel, purchaseModel } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config')
const userRouter = Router();


userRouter.post('/signup', async function(req,res){
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message:'Signup succedded'
    })
});

userRouter.post('/signin', async function(req,res){
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if(user){
        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_USER_PASSWORD);

        res.json({
            token : token,
        })
    }else{
        res.status(403).json({
            message : "incorrect credentials",
        })
    }
});

userRouter.get('/purchases', async function(req,res){
    const userId = req.userId;

    const purchasedCourses = await purchaseModel.find({
        userId,
    })
    res.json({
        message:'following are your purchased courses',
        purchasedCourses,
    })
});

module.exports = {
    userRouter: userRouter
}