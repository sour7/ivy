import express, { json }  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import courseRoute from "./routes/course.js"

const app= express();
dotenv.config()


const PORT=process.env.PORT

  const connect=async()=>{
   try {
   await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db")
   } catch (error) {
    console.log(error.codeName)
   }
  }

  mongoose.connection.on("disconnected", ()=>{
    console.log("mongo db disconnected")
  })

  mongoose.connection.on("connected", ()=>{
    console.log("mongo db connected")
  })


app.get("/", (req, res)=>{
    res.send("hello from apis")
})

// middleware
app.use(express.json())

app.use(express.json())
app.use("/api/v1", courseRoute)





app.listen(PORT, ()=>{
    connect()
    console.log("app is listening on port:"+PORT)
})