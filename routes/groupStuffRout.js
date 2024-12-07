const { Router } = require("express")
const groupStuff = Router()

const {
    createGroupStuff,
    getGroupStuff,
    getGroupStuffById,
    updateGroupStuffById,
    deletedGroupStuffById,
} = require('../controllers/groupStuff.controller')

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
} = require("../validation/groupStuffValidation");


/**
 * @swagger
 * tags:
 *   name: GroupStuff
 *   description: groupStuff boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /groupStuff/createGroupStuff:
 *   post:
 *     summary: GroupStuff  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [GroupStuff]
 *     description: Yangi GroupStuff yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: string
 *                 description: Group id
 *               stuff_id:
 *                 type: string
 *                 description: Stuff id
 *     responses:
 *       201:
 *         description: GroupStuff muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

groupStuff.post("/createGroupStuff", validateSchema(registerValidationSchema), createGroupStuff);


/**
 * @swagger
 * /groupStuff/getGroupStuff:
 *   get:
 *     summary: Barcha GroupStuff olish
 *     tags: [GroupStuff]
 *     description: Barcha GroupStuff ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: GroupStuff ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

groupStuff.get("/getGroupStuff", getGroupStuff);


/**
 * @swagger
 * /groupStuff/getGroupStuffById/{id}:
 *   get:
 *     summary: GroupStuff ID orqali olish
 *     tags: [GroupStuff]
 *     description: GroupStuff ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: GroupStuff olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli GroupStuff ma'lumotlari
 *       404:
 *         description: GroupStuff topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

groupStuff.get("/getGroupStuffById/:id", getGroupStuffById);


/**
 * @swagger
 * /groupStuff/updateGroupStuffById/{id}:
 *   put:
 *     summary: GroupStuffni yangilash
 *     tags: [GroupStuff]
 *     description: GroupStuff ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: GroupStuff olish uchun ID
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
 *               group_id:
 *                 type: string
 *                 description: Yangi Group id
 *               stuff_id:
 *                 type: string
 *                 description: Yangi Stuff id
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

groupStuff.put("/updateGroupStuffById/:id", validateSchema(updateValidationSchema), updateGroupStuffById);


/**
 * @swagger
 * /groupStuff/deletedGroupStuffById/{id}:
 *   delete:
 *     summery: Delete a GroupStuff by id
 *     tags: [GroupStuff]
 *     description: Delete a GroupStuff with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the GroupStuff to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli GroupStuff ma'lumotlari
 *       404:
 *         description: GroupStuff topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

groupStuff.delete("/deletedGroupStuffById/:id", deletedGroupStuffById);

module.exports = { groupStuff };
