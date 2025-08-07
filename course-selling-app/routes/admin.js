const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db")

adminRouter.post('/signup', function(req,res){
    res.json({
        message : 'admin siginup endpoint'
    })
});

adminRouter.post('/signin', function(req,res){
    res.json({
        message : ' admin signin endpoint'
    })
});

adminRouter.post('/', function(req,res){
    res.json({
        message : 'admin course creating endpoint'
    })
});

adminRouter.put('/', function(req,res){
    res.json({
        message : ' admin course changing/updating/renaming endpoint'
    })
});

adminRouter.get('/bulk', function(req,res){
    res.json({
        message: ' admin all course getting endpoint'
    })
});

module.exports = {
    adminRouter : adminRouter
}