const { Payment } = require("../models/payment.model");

// ------------------------Get Payment ----------------
const getPayment = async (req, res) => {
  try {
    const payment = await Payment.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: payment,
    });
  } catch (error) {
    console.error("Error fetching Payment", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreatePayment ----------------

const createPayment = async (req, res) => {
  try {
    const {
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    } = req.body;

    const newPayment = new Payment({
      student_id,
      payment_last_date,
      payment_date,
      price,
      is_paid,
      total_attent,
    });
    await newPayment.save();
    return res.status(201).json({
      success: true,
      message: " muvoffaqiyatli olindi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxat qo'shish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetPaymentById ----------------
const getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;

    const payment = await Payment.findById(paymentId).populate("student_id");

    if (!payment) {
      return res.status(404).json({ massage: "Payment not found" });
    }
    res.json({ massage: "Payment found", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdatePayment ----------------

const updatePaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const updatePayment = req.body;

    const payment = await Payment.findByIdAndUpdate(paymentId, updatePayment, {
      new: true,
    });

    res.json({ massage: "Payment updated successfully", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeletePayment ----------------

const deletePaymentById = async (req, res) => {
  try {
    const PaymentId = req.params.id;

    const payment = await Payment.findByIdAndDelete(PaymentId);

    if (!payment) {
      return res.status(404).json({ massage: "Payment not found" });
    }
    res.json({ massage: "Payment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createPayment,
  getPayment,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
};
