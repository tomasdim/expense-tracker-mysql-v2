const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/auth')


//LOGIN

router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({where:{username: req.body.username}})
         

        !user && res.status(400).json("Wrong credentials! user not found")

        const validated = await bcrypt.compare(req.body.password, user.password)
        const token = jwt.sign({user:user}, "privatekey", {
            expiresIn: "1d"
          })
        console.log("user:"+user)
        !validated && res.status(400).json("Wrong credentials! password doesn't match")

        res.status(200).json({user,token})
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;

// router.post("/login", async (req,res)=>{
//     try{
//       let {username,password} = req.body;

//       User.findOne({where:{username:username}}).then(user=>{
//           if(!user){
//               res.status(404).json({msg:"User not found!"})
//           } else{
//               if(bcrypt.compareSync(password, user.password)){
//                 let token = jwt.sign
//               } else{
//                 res.status(401).json({msg:"Username or password incorrect!"})
//               }
//           }
//       })
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// module.exports = router;
