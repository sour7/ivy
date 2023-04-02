import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './course.css'

const Courses = () => {
const [data, setData]=useState([])
const navigate= useNavigate()

useEffect(()=>{
   const getdata= async()=>{
    const res= await axios.get("https://ivy-sourabh.onrender.com/api/v1/allcourse")
    setData( res.data)
   }
   getdata()
},[])
const handleClick=(id)=>{

    navigate("/coursedetails/")
}
console.log("dataa", data)

  return (
    <div className='courses'>
        {
            data.map((e,idx)=>(
       <div className='wrapper' key={idx}>
        <div className="imgContainer">
            <div className="courseimg">
            <img src={e.img1}
             alt="" width="380px" />
        </div>
        <div className="courseFeature">
            <img src={e.img2} alt="" width="80px"/>
            <img src={e.img3} alt="" width= "80px" />
        </div>
        </div>
             
              
        <div className="courseName">
            <h3>{e.courseName.substring(0, 38)}</h3>
        </div>
        <hr />
        <div className="courseDetails">
            {
                e.courseDetails.map((el, i)=>(
              
           <div className="detail" key={i}>
           <img src={el.logo} alt="" width="20px"/>
            <p>{el.text}</p>
           </div>
                 
                 ))
                }
          
        </div>
        <div className='courseButton'>
            <button className='viewbtn' onClick={()=>handleClick(e._id)}>VIEW PROGRAM</button>
        </div>
        </div>
           ))
        }
    </div>
  )
}

export default Courses