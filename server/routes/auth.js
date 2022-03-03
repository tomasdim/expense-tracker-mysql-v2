const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require('bcrypt');

//CREATE USER
router.post("/users", async (req, res) => {
    const { username, password } = req.body;
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPass = await bcrypt.hash(req.body.password, salt)
  
      const user = await User.create({ username, password:hashedPass });
  
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  });

//LOGIN

router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})

        !user && res.status(400).json("Wrong credentials! user not found")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials! password doesn't match")

        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
