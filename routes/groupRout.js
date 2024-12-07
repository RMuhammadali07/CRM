const { Router } = require("express");
const group = Router();

const {
  createGroup,
  getGroup,
  getGroupById,
  updateGroupById,
  deleteGroupById
} = require("../controllers/group.controller");

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
} = require("../validation/groupValidation");
 


/**
 * @swagger
 * tags:
 *   name: Group
 *   description: Role boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /group/createGroup:
 *   post:
 *     summary: Group  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Group]
 *     description: Yangi Group yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *                 description: gurpa nomini kiriting
 *               lesson_start_time:
 *                  type: string
 *                  description: dars boshlanish vaqtini kiriting
 *               lesson_continuous:
 *                  type: string
 *                  description: dars tugash vaqtini kiriting
 *               lesson_week_day:
 *                  type: string
 *                  description: dars qaysi kunlarda ekanini kiriting
 *               group_stage_id:
 *                  type: string
 *                  description: Stage id
 *               room_number:
 *                  type: string
 *                  description: xona raqami
 *               room_floor:
 *                  type: string
 *                  description: xona qavati
 *               branch_id:
 *                  type: string
 *                  description: Branch id
 *               lessons_quant:
 *                  type: string
 *                  description: qancha vaqt
 *               is_active:
 *                  type: boolean
 *                  description: active 
 *               
 *     responses:
 *       201:
 *         description: Group muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

group.post("/createGroup",validateSchema(registerValidationSchema),createGroup);


/**
 * @swagger
 * /group/getGroup:
 *   get:
 *     summary: Barcha Group olish
 *     tags: [Group]
 *     description: Barcha Group ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Group ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

group.get("/getGroup", getGroup);


/**
 * @swagger
 * /group/getGroupById/{id}:
 *   get:
 *     summary: Group ID orqali olish
 *     tags: [Group]
 *     description: Group ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Group olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Group ma'lumotlari
 *       404:
 *         description: Group topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

group.get("/getGroupById/:id", getGroupById);


/**
 * @swagger
 * /group/updateGroupById/{id}:
 *   put:
 *     summary: Groupni yangilash
 *     tags: [Group]
 *     description: Group ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Group olish uchun ID
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
 *               group_name:
 *                 type: string
 *                 description: gurpa nomini kiriting
 *               lesson_start_time:
 *                  type: string
 *                  description: dars boshlanish vaqtini kiriting
 *               lesson_continuous:
 *                  type: string
 *                  description: dars tugash vaqtini kiriting
 *               lesson_week_day:
 *                  type: string
 *                  description: dars qaysi kunlarda ekanini kiriting
 *               group_stage_id:
 *                  type: string
 *                  description: Stage id
 *               room_number:
 *                  type: string
 *                  description: xona raqami
 *               room_floor:
 *                  type: string
 *                  description: xona qavati
 *               branch_id:
 *                  type: string
 *                  description: Branch id
 *               lessons_quant:
 *                  type: string
 *                  description: qancha vaqt
 *               is_active:
 *                  type: boolean
 *                  description: active 
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

group.put("/updateGroupById/:id", validateSchema(updateValidationSchema),updateGroupById);


/**
 * @swagger
 * /group/deleteGroupById/{id}:
 *   delete:
 *     summery: Delete a Group by id
 *     tags: [Group]
 *     description: Delete a Group with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Group to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Group ma'lumotlari
 *       404:
 *         description: Group topilmadi
 *       500:
 *         description: Ichki server xatosi
 */


group.delete("/deleteGroupById/:id", deleteGroupById);

module.exports = { group };
