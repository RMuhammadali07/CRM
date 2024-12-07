const { Router } = require("express")
const roles = Router();

const {
    getRoles,
    createRoles,
    getRoleById,
    updateRoleById,
    deleteRoleById,
} = require("../controllers/role.controller")


const validateSchema = (schema) => (req, res, next) =>{
  const validationResult = schema.validate(req.body)
  if(validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message );
  }
  next();
}

const {
  registerValidationSchema,
  updateValidationSchema
} = require("../validation/roleValidation");

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /roles/createRoles:
 *   post:
 *     summary: Role  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Role]
 *     description: Yangi Role yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Role name i
 *     responses:
 *       201:
 *         description: Role muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */


roles.post("/createRoles", validateSchema(registerValidationSchema) , createRoles);


/**
 * @swagger
 * /roles/getRoles:
 *   get:
 *     summary: Barcha Role olish
 *     tags: [Role]
 *     description: Barcha Role ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Role ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

roles.get("/getRoles", getRoles);

/**
 * @swagger
 * /roles/getRoleById/{id}:
 *   get:
 *     summary: Role ID orqali olish
 *     tags: [Role]
 *     description: Role ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Role olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Role ma'lumotlari
 *       404:
 *         description: Role topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

roles.get("/getRoleById/:id", getRoleById);

/**
 * @swagger
 * /roles/updateRoleById/{id}:
 *   put:
 *     summary: Roleni yangilash
 *     tags: [Role]
 *     description: Role ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Role olish uchun ID
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

roles.put("/updateRoleById/:id", validateSchema(updateValidationSchema), updateRoleById);


/**
 * @swagger
 * /roles/deleteRoleById/{id}:
 *   delete:
 *     summery: Delete a Roles by id
 *     tags: [Role]
 *     description: Delete a Roles with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Roles to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Roles ma'lumotlari
 *       404:
 *         description: Roles topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

roles.delete("/deleteRoleById/:id", deleteRoleById);

module.exports = { roles }
