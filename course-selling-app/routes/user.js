const { Router } = require('express');

const userRouter = Router();


userRouter.post('/user/signup', function(req,res){
    res.json({
        message:'Signup endpoint'
    })
});

userRouter.post('/user/signin', function(req,res){
    res.json({
        message:'Signin endpoint'
    })
});

userRouter.get('/user/purchases', function(req,res){
    res.json({
        message:'user purchased courses endpoint'
    })
});

module.exports = {
    userRouter: userRouter
}