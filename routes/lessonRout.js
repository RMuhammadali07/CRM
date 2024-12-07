const { Router } = require("express");
const lesson = Router();

const {
  createLesson,
  getLesson,
  getLessonById,
  updateLessonById,
  deleteLessonById,
} = require("../controllers/lesson.controller");


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
} = require("../validation/lessonValidation");



/**
 * @swagger
 * tags:
 *   name: Lesson
 *   description: Lesson boshqarish uchun API endpointlari
 */


/**
 * @swagger
 * /lesson/createLesson:
 *   post:
 *     summary: Lesson  ma'lumotlarini ro'yxatdan o'tkazish
 *     tags: [Lesson]
 *     description: Yangi Lesson yartish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_theme:
 *                 type: string
 *                 description: dars mavzu
 *               lesson_number:
 *                  type: string
 *                  description: nechanchi dars
 *               group_id:
 *                  type: string
 *                  description: Group id
 *               lesson_date:
 *                  type: string
 *                  description: dars sanasi
 *     responses:
 *       201:
 *         description: Lesson muvaffaqiyatli ro'yxatdan o'tkazildi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

lesson.post("/createLesson",validateSchema(registerValidationSchema),createLesson);

/**
 * @swagger
 * /lesson/getLesson:
 *   get:
 *     summary: Barcha Lesson olish
 *     tags: [Lesson]
 *     description: Barcha Lesson ro'yxatini  olish
 *     responses:
 *       '200':
 *         description: Lesson ro'yxati muvaffaqiyatli qaytarildi
 *       '500':
 *         description: Ichki server xatosi
 */

lesson.get("/getLesson", getLesson);



/**
 * @swagger
 * /lesson/getLessonById/{id}:
 *   get:
 *     summary: Lesson ID orqali olish
 *     tags: [Lesson]
 *     description: Lesson ID orqali olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Lesson ma'lumotlari
 *       404:
 *         description: Lesson topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lesson.get("/getLessonById/:id", getLessonById);



/**
 * @swagger
 * /lesson/updateLessonById/{id}:
 *   put:
 *     summary: Lessonni yangilash
 *     tags: [Lesson]
 *     description: Lesson ma'lumotlarini yangilash (masalan, name, boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Lesson olish uchun ID
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
 *               lesson_theme:
 *                 type: string
 *                 description: dars mavzu
 *               lesson_number:
 *                  type: string
 *                  description: nechanchi dars
 *               group_id:
 *                  type: string
 *                  description: Group id
 *               lesson_date:
 *                  type: string
 *                  description: dars sanasi
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


lesson.put("/updateLessonById/:id",validateSchema(updateValidationSchema),updateLessonById);


/**
 * @swagger
 * /lesson/deleteLessonById/{id}:
 *   delete:
 *     summery: Delete a Lesson by id
 *     tags: [Lesson]
 *     description: Delete a Lesson with the provided id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Id of the Lesson to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli Lesson ma'lumotlari
 *       404:
 *         description: Lesson topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

lesson.delete("/deleteLessonById/:id", deleteLessonById);

module.exports = { lesson };
