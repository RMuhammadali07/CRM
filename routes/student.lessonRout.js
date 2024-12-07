const { Router } = require("express");
const studentLesson = Router();

const {
  createStudentLesson,
  getStudentLesson,
  getStudentLessonById,
  updateStudentLessonById,
  deleteStudentLessonById,
} = require("../controllers/student.lesson.controller");

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
} = require("../validation/student.lessonValidation");

/**
 * @swagger
 * tags:
 *   name: StudentLesson
 *   description: StudentLesson boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /studentLesson/createStudentLesson:
 *   post:
 *     summary: StudentLesson  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [StudentLesson]
 *     description: Yangi StudentLesson yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: string
 *                 description: lesson id
 *               student_id:
 *                  type: string
 *                  description: student id
 *               is_there:
 *                  type: string
 *                  description: is there
 *               reason:
 *                  type: string
 *                  description: reason
 *               be_paid:
 *                  type: boolean
 *                  description: be_paid
 *     responses:
 *       201:
 *         description: Lesson muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

studentLesson.post(
  "/createStudentLesson",
  validateSchema(registerValidationSchema),
  createStudentLesson
);

/**
 * @swagger
 * /studentLesson/getStudentLesson:
 *   get:
 *     summary: Barcha StudentLesson olish
 *     tags: [StudentLesson]
 *     description: Barcha StudentLesson ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: StudentLesson ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

studentLesson.get("/getStudentLesson", getStudentLesson);

/**
 * @swagger
 * /StudentLesson/getStudentLessonById/{id}:
 *   get:
 *     summary: StudentLesson ID orqali olish
 *     tags: [StudentLesson]
 *     description: StudentLesson ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StudentLesson olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StudentLesson ma'lumotlari
 *       404:
 *         description: StudentLesson topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

studentLesson.get("/getStudentLessonById/:id", getStudentLessonById);

/**
 * @swagger
 * /studentLesson/updateStudentLessonById/{id}:
 *   put:
 *     summary: StudentLessonni yangilash
 *     tags: [StudentLesson]
 *     description: StudentLesson ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: StudentLesson olish uchun ID
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
 *               lesson_id:
 *                 type: string
 *                 description: lesson id 
 *               student_id:
 *                  type: string
 *                  description: student id
 *               is_there:
 *                  type: string
 *                  description: as_there
 *               reason:
 *                  type: string
 *                  description: reason
 *               be_paid:
 *                  type: boolean
 *                  description: be_paid
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

studentLesson.put("/updateStudentLessonById/:id",validateSchema(updateValidationSchema),updateStudentLessonById);


/**
 * @swagger
 * /studentLesson/deleteStudentLessonById/{id}:
 *   delete:
 *     summery: Delete a StudentLesson by id
 *     tags: [StudentLesson]
 *     description: Delete a StudentLesson with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the StudentLesson to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli StudentLesson ma'lumotlari
 *       404:
 *         description: StudentLesson topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

studentLesson.delete("/deleteStudentLessonById/:id", deleteStudentLessonById);

module.exports = { studentLesson };
