const { Router } = require("express");
const lid = Router();

const {
  createLid,
  getLid,
  getLidById,
  updateLidById,
  deleteLidById,
} = require("../controllers/lid.controller");

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
} = require("../validation/lidValidation");


// const validateSchema = (schema) => (req, res, next) => {
//   const validationResult = schema.validate(req.body);
//   if (validationResult.error) {
//     return res.status(400).send(validationResult.error.details[0].message);
//   }
//   next();
// };

// const {
//   registerValidationSchema,
//   updateValidationSchema,
// } = require("../validation/lidValidation");


/**
 * @swagger
 * tags:
 *   name: Lid
 *   description: Lid boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /lid/createLid:
 *   post:
 *     summary: Lid  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Lid]
 *     description: Yangi Lid yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: ism kiriting
 *               last_name:
 *                  type: string
 *                  description: familiya kiriting
 *               phone_number:
 *                  type: string
 *                  description: telefon raqam kiriting
 *               lid_stage_id:
 *                  type: string
 *                  description: Stage id
 *               test_date:
 *                  type: string
 *                  description: vaqt
 *               trial_lesson_date:
 *                  type: string
 *                  description: dars sanasi
 *               trial_lesson_time:
 *                  type: string
 *                  description: dars vaqti
 *               trial_lesson_group_id:
 *                  type: string
 *                  description: Group id
 *               lid_status_id:
 *                  type: string
 *                  description: LidStatus id
 *               cancel_reason_id:
 *                  type: string
 *                  description: reasonLid id 
 *               
 *     responses:
 *       201:
 *         description: Group muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

lid.post("/createLid", validateSchema(registerValidationSchema), createLid);


/**
 * @swagger
 * /lid/getLid:
 *   get:
 *     summary: Barcha Lid olish
 *     tags: [Lid]
 *     description: Barcha Lid ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Lid ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

lid.get("/getLid", getLid);



/**
 * @swagger
 * /lid/getLidById/{id}:
 *   get:
 *     summary: Lid ID orqali olish
 *     tags: [Lid]
 *     description: Lid ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lid olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Lid ma'lumotlari
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lid.get("/getLidById/:id", getLidById);



/**
 * @swagger
 * /lid/updateLidById/{id}:
 *   put:
 *     summary: Lidni yangilash
 *     tags: [Lid]
 *     description: Lid ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lid olish uchun ID
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
 *               first_name:
 *                 type: string
 *                 description: ism kiriting
 *               last_name:
 *                  type: string
 *                  description: familiya kiriting
 *               phone_number:
 *                  type: string
 *                  description: telefon raqam kiriting
 *               lid_stage_id:
 *                  type: string
 *                  description: Stage id
 *               test_date:
 *                  type: string
 *                  description: vaqt
 *               trial_lesson_date:
 *                  type: string
 *                  description: dars sanasi
 *               trial_lesson_time:
 *                  type: string
 *                  description: dars vaqti
 *               trial_lesson_group_id:
 *                  type: string
 *                  description: Group_id id
 *               lid_status_id:
 *                  type: string
 *                  description: LidStatus id
 *               cancel_reason_id:
 *                  type: string
 *                  description: reasonLid id  
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


lid.put("/updateLidById/:id",validateSchema(updateValidationSchema) ,updateLidById);

/**
 * @swagger
 * /lid/deleteLidById/{id}:
 *   delete:
 *     summery: Delete a Lid by id
 *     tags: [Lid]
 *     description: Delete a Lid with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Lid to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Lid ma'lumotlari
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lid.delete("/deleteLidById/:id", deleteLidById);

module.exports = { lid };
