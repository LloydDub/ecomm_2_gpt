const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User registration route
router.post("/register", async (req, res) => {
  // Hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// User login route
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    // Generate JWT token
    const token = jwt.sign({ username: user.username }, "secret_key"); // Replace 'secret_key' with a real secret key
    res.json({ token });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

module.exports = router;
