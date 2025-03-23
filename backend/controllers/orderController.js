const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            userId: req.body.userId,
            products: req.body.products,
            amount: req.body.amount,
            paymentStatus: "Pending",
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId", "username email");
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
