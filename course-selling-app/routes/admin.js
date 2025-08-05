const { Router } = require('express');
const adminRouter = Router();

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

adminRouter.post('/course', function(req,res){
    res.json({
        message : 'admin course creating endpoint'
    })
});

adminRouter.put('/course', function(req,res){
    res.json({
        message : ' admin course changing/updating/renaming endpoint'
    })
});

adminRouter.get('/course/bulk', function(req,res){
    res.json({
        message: ' admin all course getting endpoint'
    })
});

module.exports = {
    adminRouter : adminRouter
}