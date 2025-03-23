const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ productId: String, quantity: Number }],
    amount: Number,
    paymentStatus: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
