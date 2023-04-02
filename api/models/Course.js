import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
  },
  img3: {
    type: String,
   
  },
  courseName: {
    type: String,
    required: true
  },
  courseDetails: [{
    logo: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }],
})

export default mongoose.model("Course", courseSchema)
