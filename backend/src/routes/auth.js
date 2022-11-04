const express = require("express");
const User = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express.Router();

//Register

app.post("/register", async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().min(3).max(200).required(), //changed
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("user already exists");
    }
    user = new User({ username, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//login

app.post("/login", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(200).required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      secretKey,
      {
        expiresIn: "1d",
      }
    );
    const refreshSecretKey = process.env.REFRESH_SECRET_KEY;
    const refreshToken = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      refreshSecretKey,
      {
        expiresIn: "7d",
      }
    );

    res.send({ token, refreshToken });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
