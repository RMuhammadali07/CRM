const { Router } = require("express");
const payment = Router();

const {
  createPayment,
  getPayment,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
} = require("../controllers/payment.controller");


const validateSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

const {
  registerValidationSchema,
  updateValidationSchema,
} = require("../validation/paymentValidation");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /payment/createPayment:
 *   post:
 *     summary: Payment  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Payment]
 *     description: Yangi Payment yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: student id
 *               payment_last_date:
 *                  type: string
 *                  description: payment_last_date
 *               payment_date:
 *                  type: string
 *                  description: payment date
 *               price:
 *                  type: number
 *                  description: narxi
 *               is_paid:
 *                  type: boolean
 *                  description: is paid
 *               total_attent:
 *                  type: number
 *                  description: total attent
 *               
 *     responses:
 *       201:
 *         description: Payment muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

payment.post(
  "/createPayment",
  validateSchema(registerValidationSchema),
  createPayment
);

/**
 * @swagger
 * /payment/getPayment:
 *   get:
 *     summary: Barcha Payment olish
 *     tags: [Payment]
 *     description: Barcha Payment ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Payment ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

payment.get("/getPayment", getPayment);

/**
 * @swagger
 * /payment/getPaymentById/{id}:
 *   get:
 *     summary: Payment ID orqali olish
 *     tags: [Payment]
 *     description: Payment ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Payment ma'lumotlari
 *       404:
 *         description: Payment topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

payment.get("/getPaymentById/:id", getPaymentById);

/**
 * @swagger
 * /payment/updatePaymentById/{id}:
 *   put:
 *     summary: Paymentni yangilash
 *     tags: [Payment]
 *     description: Payment ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: student id
 *               payment_last_date:
 *                  type: string
 *                  description: payment last date
 *               payment_date:
 *                  type: string
 *                  description: payment date
 *               price:
 *                  type: number
 *                  description: narxi
 *               is_paid:
 *                  type: boolean
 *                  description: is paid
 *               total_attent:
 *                  type: number
 *                  description: total attent
 *     responses:
 *       '200':
 *         description: Foydalanuvchi muvaffaqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

payment.put(
  "/updatePaymentById/:id",
  validateSchema(updateValidationSchema),
  updatePaymentById
);


/**
 * @swagger
 * /payment/deletePaymentById/{id}:
 *   delete:
 *     summery: Delete a Payment by id
 *     tags: [Payment]
 *     description: Delete a Payment with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Payment to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Payment ma'lumotlari
 *       404:
 *         description: Payment topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

payment.delete("/deletePaymentById/:id", deletePaymentById);

module.exports = { payment };
