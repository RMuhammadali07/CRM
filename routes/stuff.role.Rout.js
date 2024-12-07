const { Router } = require("express")
const stuffRole = Router()

const {
    createStuffRole,
    getStuffRoles,
    getStuffRoleById,
    deletedStuffRole,
    updateStuffRole
} = require('../controllers/stuff.role.controller')

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
} = require("../validation/stuffRoleValidation");

/**
 * @swagger
 * tags:
 *   name: StuffRole
 *   description: Role boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /stuffRole/createStuffRole:
 *   post:
 *     summary: StuffRole  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [StuffRole]
 *     description: Yangi StuffRole yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stuff_id:
 *                 type: string
 *                 description: Stuff id
 *               role_id:
 *                 type: string
 *                 description: Role id
 *     responses:
 *       201:
 *         description: StuffRole muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

stuffRole.post("/createStuffRole", validateSchema(registerValidationSchema), createStuffRole);


/**
 * @swagger
 * /stuffRole/getStuffRole:
 *   get:
 *     summary: Barcha StuffRole olish
 *     tags: [StuffRole]
 *     description: Barcha StuffRole ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: StuffRole ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

stuffRole.get("/getStuffRole", getStuffRoles);


/**
 * @swagger
 * /stuffRole/getStuffRoleById/{id}:
 *   get:
 *     summary: StuffRole ID orqali olish
 *     tags: [StuffRole]
 *     description: StuffRole ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StuffRole olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StuffRole ma'lumotlari
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stuffRole.get("/getStuffRoleById/:id", getStuffRoleById);


/**
 * @swagger
 * /stuffRole/updateStuffRoleById/{id}:
 *   put:
 *     summary: StuffRoleni yangilash
 *     tags: [StuffRole]
 *     description: StuffRole ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StuffRole olish uchun ID
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
 *               stuff_id:
 *                 type: string
 *                 description: Yangi Stuff id
 *               role_id:
 *                 type: string
 *                 description: Yangi Role id
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

stuffRole.put("/updateStuffRoleById/:id", validateSchema(updateValidationSchema), updateStuffRole);


/**
 * @swagger
 * /stuffRole/deleteStuffRole/{id}:
 *   delete:
 *     summery: Delete a StuffRole by id
 *     tags: [StuffRole]
 *     description: Delete a StuffRole with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the StuffRole to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StuffRole ma'lumotlari
 *       404:
 *         description: StuffRole topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

stuffRole.delete("/deleteStuffRole/:id", deletedStuffRole);

module.exports = { stuffRole }
