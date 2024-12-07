const { Router } = require("express");
const lid_status = Router();

const {
  createLidstatus,
  getLidstatus,
  getLidstatusById,
  updateLidstatusById,
  deleteLidstatusById,
} = require("../controllers/lid_status.controller");

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
} = require("../validation/lid_statusValidation");



/**
 * @swagger
 * tags:
 *   name: LidStatus
 *   description: LidStatus boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /lid_status/createLidStatus:
 *   post:
 *     summary: LidStatus  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [LidStatus]
 *     description: Yangi LidStatus yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: LidStatus 
 *     responses:
 *       201:
 *         description: LidStatus muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */


lid_status.post("/createLidstatus", validateSchema(registerValidationSchema) , createLidstatus);


/**
 * @swagger
 * /lid_status/getLidStatus:
 *   get:
 *     summary: Barcha LidStatus olish
 *     tags: [LidStatus]
 *     description: Barcha LidStatus ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: LidStatus ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

lid_status.get("/getLidstatus", getLidstatus);

/**
 * @swagger
 * /lid_status/getLidStatusById/{id}:
 *   get:
 *     summary: LidStatus ID orqali olish
 *     tags: [LidStatus]
 *     description: LidStatus ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: LidStatus olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli LidStatus ma'lumotlari
 *       404:
 *         description: LidStatus topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lid_status.get("/getLidstatusById/:id", getLidstatusById);


/**
 * @swagger
 * /lid_status/updateLidStatusById/{id}:
 *   put:
 *     summary: LidStatusni yangilash
 *     tags: [LidStatus]
 *     description: LidStatus ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: LidStatus olish uchun ID
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
 *               status:
 *                 type: string
 *                 description: Yangi LidStatus
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

lid_status.put("/updateLidstatusById/:id", validateSchema(updateValidationSchema), updateLidstatusById);


/**
 * @swagger
 * /lid_status/deleteLidstatusById/{id}:
 *   delete:
 *     summery: Delete a LidStatus by id
 *     tags: [LidStatus]
 *     description: Delete a LidStatus with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the LidStatus to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli LidStatus ma'lumotlari
 *       404:
 *         description: LidStatus topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lid_status.delete("/deleteLidstatusById/:id", deleteLidstatusById);

module.exports = { lid_status };
