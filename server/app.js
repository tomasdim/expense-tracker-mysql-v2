const express = require("express");
const { sequelize } = require("./models");
const operationsRoute = require("./routes/operations");
const operationsUser = require("./routes/users");

//Middlewares
const app = express();
app.use(express.json());

//Routes
app.use("", operationsRoute);
app.use("", operationsUser);

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected!");
});
