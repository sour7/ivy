import Course from "../models/Course.js";

export const createCourse= async(req, res, next)=>{
    const newCourse= new Course(req.body)
    try {
        const saveCourse= await newCourse.save()
        res.status(201).json(saveCourse)
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

export const getAllCourses=async(req, res, next)=>{
    try {
        const course = await Course.find() 
        res.status(200).json(course) 
      } catch (error) {
        res.status(500).json(error.message) 
      }
}

export const getaCourse= async(req, res, next)=>{
    try {
        const course = await Course.findById(req.params.id) 
        res.status(200).json(course) 
      } catch (error) {
         res.status(500).json(error.message) 
      }
}