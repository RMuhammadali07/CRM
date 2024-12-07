const { Router } = require("express");
const stage = Router();

const {
    getStage,
    createStage,
    getStageById,
    updateStageById,
    deleteStageById,
} = require("../controllers/stage.controller")


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
} = require("../validation/stageValidation");

/**
 * @swagger
 * tags:
 *   name: Stage
 *   description: Stage boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /stage/createStage:
 *   post:
 *     summary: Stage  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Stage]
 *     description: Yangi Stage yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Stage name i
 *     responses:
 *       201:
 *         description: Role muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

stage.post("/createStage", validateSchema(registerValidationSchema), createStage);


/**
 * @swagger
 * /stage/getStage:
 *   get:
 *     summary: Barcha Stage olish
 *     tags: [Stage]
 *     description: Barcha Stage ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Stage ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

stage.get("/getStage", getStage);


/**
 * @swagger
 * /stage/getStageById/{id}:
 *   get:
 *     summary: Stage ID orqali olish
 *     tags: [Stage]
 *     description: Stage ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Stage olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Stage ma'lumotlari
 *       404:
 *         description: Stage topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stage.get("/getStageById/:id", getStageById);


/**
 * @swagger
 * /stage/updateStageById/{id}:
 *   put:
 *     summary: Stageni yangilash
 *     tags: [Stage]
 *     description: Stage ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Stage olish uchun ID
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
 *               name:
 *                 type: string
 *                 description: Yangi name
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

stage.put("/updateStageById/:id", validateSchema(updateValidationSchema),updateStageById);


/**
 * @swagger
 * /stage/deleteStageById/{id}:
 *   delete:
 *     summery: Delete a Stage by id
 *     tags: [Stage]
 *     description: Delete a Stage with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Stage to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Stage ma'lumotlari
 *       404:
 *         description: Stage topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stage.delete("/deleteStageById/:id", deleteStageById);

module.exports = { stage };
