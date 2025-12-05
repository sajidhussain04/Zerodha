const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  mode: { type: String, required: true }, // e.g., "BUY" or "SELL"
  createdAt: { type: Date, default: Date.now },
});

module.exports = { OrdersSchema };
