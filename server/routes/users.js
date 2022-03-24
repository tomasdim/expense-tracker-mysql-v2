const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/auth')

//CREATE USER
router.post("/users", async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

 

    const user = await User.create({ username, password:hashedPass });

    const token = jwt.sign({user:user}, "privatekey", {
      expiresIn: "1d"
    })

    return res.json({user:user, token:token});
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//GET ALL USERS
router.get("/users", auth, async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//GET USER BY ID
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: { id },
      include: "operations",
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//EDIT USER
router.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { id },
    });
    user.username = username;
    user.password = password;

    await user.save();

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//DELETE USER
router.delete("/users/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: { id },
    });
    await user.destroy();
    return res.json({ message: "User has been deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
