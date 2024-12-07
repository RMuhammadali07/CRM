const { Router } = require('express');
const stuff = Router()

const {
    getStuff,
    createStuff,
    getStuffById,
    updateStuffById,
    deleteStuffById,
} = require('../controllers/stuff.controller')

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
} = require("../validation/stuffValidation");


/**
 * @swagger
 * tags:
 *   name: Stuff
 *   description: Stuff boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /stuff/createStuff:
 *   post:
 *     summary: Stuff  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Stuff]
 *     description: Yangi Stuff yartish
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
 *                  description: famiya kiriting
 *               phone_number:
 *                  type: string
 *                  description: nomer kiriting
 *               login:
 *                  type: string
 *                  description: login kiriting
 *               parol:
 *                  type: string
 *                  description: parol kiriting
 *               is_active:
 *                  type: boolean
 *                  description: active kiriting
 *               
 *     responses:
 *       201:
 *         description: Stuff muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

stuff.post("/createStuff",validateSchema(registerValidationSchema), createStuff);

/**
 * @swagger
 * /stuff/getStuff:
 *   get:
 *     summary: Barcha stuff olish
 *     tags: [Stuff]
 *     description: Barcha Stuff ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Stuff ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

stuff.get("/getStuff", getStuff);


/**
 * @swagger
 * /stuff/getStuffById/{id}:
 *   get:
 *     summary: Stuff ID orqali olish
 *     tags: [Stuff]
 *     description: Stuff ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Stuff olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Stuff ma'lumotlari
 *       404:
 *         description: Stuff topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stuff.get("/getStuffById/:id", getStuffById);


/**
 * @swagger
 * /stuff/updateStuffById/{id}:
 *   put:
 *     summary: Stuffni yangilash
 *     tags: [Stuff]
 *     description: Stuff ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Stuff olish uchun ID
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
 *                 description: Yangi ism
 *               last_name:
 *                  type: string
 *                  description: Yangi famiya 
 *               phone_number:
 *                  type: string
 *                  description: Yangi nomer 
 *               login:
 *                  type: string
 *                  description: Yangi login 
 *               parol:
 *                  type: string
 *                  description: famiya parol
 *               is_active:
 *                  type: boolean
 *                  description: activni almashtirish
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

stuff.put("/updateStuffById/:id",validateSchema(updateValidationSchema), updateStuffById);


/**
 * @swagger
 * /stuff/deleteStuffById/{id}:
 *   delete:
 *     summery: Delete a Stuff by id
 *     tags: [Stuff]
 *     description: Delete a Stuff with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Stuff to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Stuff ma'lumotlari
 *       404:
 *         description: Stuff topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stuff.delete("/deleteStuffById/:id", deleteStuffById);

module.exports = { stuff }