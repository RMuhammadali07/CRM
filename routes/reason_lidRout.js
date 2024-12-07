const { Router } = require("express");
const reason_lid = Router();

const {
  createReasonlid,
  getReasonlid,
  getReasonlidById,
  updateReasonlidById,
  deleteReasonlidById,
} = require("../controllers/reason_lid.controller");

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
} = require("../validation/reason_lidValidation");


/**
 * @swagger
 * tags:
 *   name: ReasonLid
 *   description: ReasonLid boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /reason_lid/createReasonLid:
 *   post:
 *     summary: ReasonLid  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [ReasonLid]
 *     description: Yangi ReasonLid yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason_lid:
 *                 type: string
 *                 description: ReasonLid name i
 *     responses:
 *       201:
 *         description: ReasonLid muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */


reason_lid.post("/createReasonlid", validateSchema(registerValidationSchema) , createReasonlid);


/**
 * @swagger
 * /reason_lid/getReasonLid:
 *   get:
 *     summary: Barcha ReasonLid olish
 *     tags: [ReasonLid]
 *     description: Barcha ReasonLid ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: ReasonLid ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

reason_lid.get("/getReasonlid", getReasonlid);


/**
 * @swagger
 * /reason_lid/getReasonLidById/{id}:
 *   get:
 *     summary: ReasonLid ID orqali olish
 *     tags: [ReasonLid]
 *     description: ReasonLid ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ReasonLid olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli ReasonLid ma'lumotlari
 *       404:
 *         description: ReasonLid topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

reason_lid.get("/getReasonlidById/:id", getReasonlidById);


/**
 * @swagger
 * /reason_lid/updateReasonLidById/{id}:
 *   put:
 *     summary: ReasonLidni yangilash
 *     tags: [ReasonLid]
 *     description: ReasonLid ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ReasonLid olish uchun ID
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
 *               reason_lid:
 *                 type: string
 *                 description: Yangi ReasonLid
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


reason_lid.put("/updateReasonlidById/:id", validateSchema(updateValidationSchema), updateReasonlidById);


/**
 * @swagger
 * /reason_lid/deleteReasonlidById/{id}:
 *   delete:
 *     summery: Delete a ReasonLid by id
 *     tags: [ReasonLid]
 *     description: Delete a ReasonLid with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the ReasonLid to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli ReasonLid ma'lumotlari
 *       404:
 *         description: ReasonLid topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

reason_lid.delete("/deleteReasonlidById/:id", deleteReasonlidById);

module.exports = { reason_lid };
