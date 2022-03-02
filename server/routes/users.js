const router = require("express").Router();
const { User } = require("../models");

//CREATE USER
router.post("/users", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//GET ALL USERS
router.get("/users", async (req, res) => {
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
router.delete("/users/:id", async (req, res) => {
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
