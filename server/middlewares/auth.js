const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    console.log(req.headers)
    console.log('req.headers.funciona')
    if(!req.headers.authorization){
        res.status(401).json({msg:"Access denied!"})
    } else{
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, "privatekey", (err,decoded)=>{
            if(err){
                res.status(500).json({msg:"Token couldn't be decoded", err})
            } else{
                req.user=decoded
                next();
            }
        })
        

    }
}