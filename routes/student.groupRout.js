const { Router } = require("express");
const studentGroup = Router();

const {
  createStudentGroup,
  getStudentGroup,
  getStudentGroupById,
  deletedStudentGroup,
  updateStudentGroup,
} = require("../controllers/student.group.controlller");

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
} = require("../validation/student.groupValidation");

/**
 * @swagger
 * tags:
 *   name: StudentGroup
 *   description: StudentGroup boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /studentGroup/createStudentGroup:
 *   post:
 *     summary: StudentGroup  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [StudentGroup]
 *     description: Yangi StudentGroup yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: string
 *                 description: Stuff id
 *               group_id:
 *                 type: string
 *                 description: Role id
 *     responses:
 *       201:
 *         description: StudentGroup muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

studentGroup.post(
  "/createStudentGroup",
  validateSchema(registerValidationSchema),
  createStudentGroup
);

/**
 * @swagger
 * /studentGroup/getStudentGroup:
 *   get:
 *     summary: Barcha StudentGroup olish
 *     tags: [StudentGroup]
 *     description: Barcha StudentGroup ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: StudentGroup ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

studentGroup.get("/getStudentGroup", getStudentGroup);

/**
 * @swagger
 * /studentGroup/getStudentGroupById/{id}:
 *   get:
 *     summary: StudentGroup ID orqali olish
 *     tags: [StudentGroup]
 *     description: StudentGroup ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StudentGroup olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StudentGroup ma'lumotlari
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

studentGroup.get("/getStudentGroupById/:id", getStudentGroupById);

/**
 * @swagger
 * /studentGroup/updateStudentGroupById/{id}:
 *   put:
 *     summary: StudentGroupni yangilash
 *     tags: [StudentGroup]
 *     description: StudentGroup ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StudentGroup olish uchun ID
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
 *               student_id:
 *                 type: string
 *                 description: Yangi Stuff id
 *               group_id:
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

studentGroup.put(
  "/updateStudentGroupById/:id",
  validateSchema(updateValidationSchema),
  updateStudentGroup
);


/**
 * @swagger
 * /studentGroup/deleteStudentGroupById/{id}:
 *   delete:
 *     summery: Delete a StudentGroup by id
 *     tags: [StudentGroup]
 *     description: Delete a StudentGroup with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the StudentGroup to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StudentGroup ma'lumotlari
 *       404:
 *         description: StudentGroup topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

studentGroup.delete("/deleteStudentGroupById/:id", deletedStudentGroup);

module.exports = { studentGroup };
