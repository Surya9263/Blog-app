const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const app = express.Router();

//update

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const secretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secretKey);
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//delete

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const secretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secretKey);
    await User.findByIdAndDelete(id);
    res.send("user deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
