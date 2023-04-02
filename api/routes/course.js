import express from "express";
import { createCourse, getAllCourses, getaCourse } from "../controllers/course.js";

const router = express.Router();

router.post("/create", createCourse)
router.get("/allcourse", getAllCourses)
router.get("/:id", getaCourse)

export default router;