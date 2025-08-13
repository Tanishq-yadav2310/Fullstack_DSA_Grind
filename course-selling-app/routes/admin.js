const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require("../db")
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require('../middlewares/admin');

adminRouter.post('/signup', async function(req,res){
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName: firstName,
        lastName: lastName,
    })

    res.json({
        message : 'admin siginup succedded'
    })
});

adminRouter.post('/signin', async function(req,res){

    const {email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
    });

    if(admin){
        const token = jwt.sign({
            id: admin._id,
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message: 'Incorrect credentials'
        })
    }

});

adminRouter.post('/course', adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const { title, description, imageUrl, price} = req.body;
    await courseModel.create({
        title, description, imageUrl, price, creatorId : adminId,
    })

    res.json({
        adminId : adminId,
        message : 'admin course creating endpoint',
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