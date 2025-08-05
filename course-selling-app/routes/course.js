const { Router } = require('express');
const courseRouter = Router();


courseRouter.post('/course/purchase', function(req,res){
    res.json({
        message:'course purchase endpoint'
    })
});
courseRouter.get('/courses', function(req,res){
    res.json({
        message:'courses endpoint'
    })
});

module.exports = {
    courseRouter : courseRouter
}