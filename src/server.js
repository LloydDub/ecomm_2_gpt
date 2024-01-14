const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB (update the URI with your connection string)
mongoose.connect("mongodb://localhost:27017/printShop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Sample route for testing
app.get("/", (req, res) => {
  res.send("Print Shop Backend is running");
});

// Define other routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
