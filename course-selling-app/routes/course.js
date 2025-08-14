const { Router } = require('express');
const courseRouter = Router();
const { userMiddleware } = require('../middlewares/user');
const { purchaseModel } = require('../db');


courseRouter.post('/purchase',userMiddleware,  async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:'you succesfully bought the course'
    })
});
courseRouter.get('/preview', async function(req,res){
    const userid = req.userId;
    const purchasedCourses = await purchaseModel.find({})

    res.json({
        message:'courses endpoint',
        purchasedCourses : purchasedCourses,
    })
});

module.exports = {
    courseRouter : courseRouter
}