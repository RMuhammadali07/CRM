const { Router } = require("express");
const branch = Router();

const {
  createBranch,
  getBranch,
  getBranchById,
  updateBranchById,
  deleteBranchById,
} = require("../controllers/branch.controller");

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
} = require("../validation/branchValidation");



/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Role boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /branch/createBranch:
 *   post:
 *     summary: Branch  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Branch]
 *     description: Yangi Branch yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *                  description: ism kiriting
 *               address:
 *                  type: string
 *                  description: address kiriting
 *               call_number:
 *                  type: number
 *                  description: nomer kiriting
 *               
 *     responses:
 *       201:
 *         description: Branch muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

branch.post("/createBranch", validateSchema(registerValidationSchema) , createBranch);


/**
 * @swagger
 * /branch/getBranch:
 *   get:
 *     summary: Barcha Branch olish
 *     tags: [Branch]
 *     description: Barcha Branch ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Branch ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

branch.get("/getBranch", getBranch);

/**
 * @swagger
 * /branch/getBranchById/{id}:
 *   get:
 *     summary: Branch ID orqali olish
 *     tags: [Branch]
 *     description: Branch ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Branch olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Branch ma'lumotlari
 *       404:
 *         description: Branch topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

branch.get("/getBranchById/:id", getBranchById);


/**
 * @swagger
 * /branch/updateBranchById/{id}:
 *   put:
 *     summary: Branchni yangilash
 *     tags: [Branch]
 *     description: Branch ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Branch olish uchun ID
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
 *                  type: string
 *                  description: Yangi ism kiriting
 *               address:
 *                  type: string
 *                  description: Yangi address kiriting
 *               call_number:
 *                  type: number
 *                  description: Yangi nomer kiriting
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

branch.put("/updateBranchById/:id", validateSchema(updateValidationSchema), updateBranchById);


/**
 * @swagger
 * /branch/deleteBranchById/{id}:
 *   delete:
 *     summery: Delete a branch by id
 *     tags: [Branch]
 *     description: Delete a branch with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the branch to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Branch ma'lumotlari
 *       404:
 *         description: Branch topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

branch.delete("/deleteBranchById/:id", deleteBranchById);

module.exports = { branch };
