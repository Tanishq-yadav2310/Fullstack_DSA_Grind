const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_ADMIN_PASSWORD);

    if(decodedData){
        req.userId = decodedData.id;
        next()
    }else{
        res.status(403).json({
            message : 'you are not sigined in'
        })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware,
}