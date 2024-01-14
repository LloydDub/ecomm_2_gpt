const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  customizationOptions: [String], // Example: ['Size', 'Color', 'Text']
});

module.exports = mongoose.model("Product", productSchema);
