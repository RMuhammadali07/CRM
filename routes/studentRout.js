const { Router } = require("express");
const student = Router();

const {
  createStudent,
  getStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/student.controller");

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
} = require("../validation/studentValidation");

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: student boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /student/createStudent:
 *   post:
 *     summary: Student  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Student]
 *     description: Yangi Student yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lid_id:
 *                 type: string
 *                 description: Lid id
 *               first_name:
 *                 type: string
 *                 description: ism kiriting
 *               last_name:
 *                  type: string
 *                  description: famiya kiriting
 *               phone_number:
 *                  type: string
 *                  description: nomer kiriting
 *               bithday:
 *                  type: string
 *                  description: tug'ilgan kun kiriting
 *               gender:
 *                  type: string
 *                  description: jinsi kiriting
 *
 *     responses:
 *       201:
 *         description: Student muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

student.post("/createStudent",validateSchema(registerValidationSchema), createStudent);

/**
 * @swagger
 * /student/getStudent:
 *   get:
 *     summary: Barcha Student olish
 *     tags: [Student]
 *     description: Barcha Student ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Student ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

student.get("/getStudent", getStudent);

/**
 * @swagger
 * /student/getStudentById/{id}:
 *   get:
 *     summary: Student ID orqali olish
 *     tags: [Student]
 *     description: Student ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Student olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Student ma'lumotlari
 *       404:
 *         description: Student topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

student.get("/getStudentById/:id", getStudentById);

/**
 * @swagger
 * /student/updateStudentById/{id}:
 *   put:
 *     summary: Studentni yangilash
 *     tags: [Student]
 *     description: Student ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Student olish uchun ID
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
 *               lid_id:
 *                 type: string
 *                 description: Lid id
 *               first_name:
 *                 type: string
 *                 description: ism kiriting
 *               last_name:
 *                  type: string
 *                  description: famiya kiriting
 *               phone_number:
 *                  type: string
 *                  description: nomer kiriting
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

student.put("/updateStudentById/:id",validateSchema(updateValidationSchema), updateStudentById);


/**
 * @swagger
 * /student/deleteStudentById/{id}:
 *   delete:
 *     summery: Delete a Student by id
 *     tags: [Student]
 *     description: Delete a Student with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Student to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Student ma'lumotlari
 *       404:
 *         description: Student topilmadi
 *       500:
 *         description: Ichki server xatosi
 */    

student.delete("/deleteStudentById/:id", deleteStudentById);

module.exports = { student };
