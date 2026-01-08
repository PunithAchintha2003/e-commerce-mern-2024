const jwt = require('jsonwebtoken')

async function authToken(req,res,next){
    try{
        const token = req.cookies?.token

        console.log("token",token)

        if(!token){
            return res.status(401).json({
                message : "Please Login...!",
                error : true,
                success : false,
            })
        }

        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if(err){
                return res.status(401).json({
                    message : "Invalid or expired token. Please login again.",
                    error : true,
                    success : false,
                })
            }
            if(!decoded || !decoded._id){
                return res.status(401).json({
                    message : "Invalid token format. Please login again.",
                    error : true,
                    success : false,
                })
            }
            req.userId = decoded._id
            next()
        });

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }
}

module.exports = authToken