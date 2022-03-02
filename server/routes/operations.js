const router = require("express").Router();
const { Operations, User } = require("../models");
const user = require("../models/user");

//CREATE OPERATION
router.post("/operations", async (req, res) => {
  const { name, amount, type, id } = req.body;

  try {
    const user = await User.findOne({ where: { id: id } });

    const operation = await Operations.create({
      name,
      amount,
      type,
      userId: user.id,
    });

    return res.json(operation);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//GET ALL OPERATIONS
router.get("/operations", async (req, res) => {
  try {
    const operations = await Operations.findAll({ include: "user" });

    return res.json(operations);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//GET OPERATION BY ID
router.get("/operations/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const operation = await Operations.findOne({
      where: { id },
    });

    return res.json(operation);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//EDIT OPERATION
router.put("/operations/:id", async (req, res) => {
  const id = req.params.id;
  const { name, amount, type } = req.body;
  try {
    const operation = await Operations.findOne({
      where: { id },
    });
    operation.name = name;
    operation.amount = amount;
    operation.type = type;

    await operation.save();

    return res.json(operation);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

//DELETE OPERATION
router.delete("/operations/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const operation = await Operations.findOne({
      where: { id },
    });
    await operation.destroy();
    return res.json({ message: "Operation has been deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
