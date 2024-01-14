const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      customization: String, // Example: Custom text or selected options
    },
  ],
  total: Number,
  status: String, // Example: 'Pending', 'Shipped', 'Delivered'
});

module.exports = mongoose.model("Order", orderSchema);
