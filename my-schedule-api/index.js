const express = require("express");
const cors = require("cors");
// controllers
const { login } = require("./controllers/userController");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", login);

app.listen(9000, () => console.log("Running on localhost:9000"));
