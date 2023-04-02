import React from 'react'
import './course.css'

const Courses = () => {

const data=[
    {
        img1:"https://www.ivyproschool.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-11.11.28-AM.jpeg",
        img2:"https://www.ivyproschool.com/wp-content/uploads/2022/02/logo.png",
        img3:"https://www.ivyproschool.com/wp-content/uploads/2015/07/logo.jpg",
        couseName:"Data Science with Machine Learning, Artificial Intelligence & Deep Learning",
        courseDetails:[{logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"}
        
        ]
    },
    {
        img1:"https://www.ivyproschool.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-11.11.28-AM.jpeg",
        img2:"https://www.ivyproschool.com/wp-content/uploads/2022/02/logo.png",
        img3:"https://www.ivyproschool.com/wp-content/uploads/2015/07/logo.jpg",
        couseName:"Data Science with Machine Learning, Artificial Intelligence & Deep Learning",
        courseDetails:[{logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"}
        
        ]
    },
    {
        img1:"https://www.ivyproschool.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-11.11.28-AM.jpeg",
        img2:"https://www.ivyproschool.com/wp-content/uploads/2022/02/logo.png",
        img3:"https://www.ivyproschool.com/wp-content/uploads/2015/07/logo.jpg",
        couseName:"Data Science with Machine Learning, Artificial Intelligence & Deep Learning",
        courseDetails:[{logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"}
        
        ]
    },
    {
        img1:"https://www.ivyproschool.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-21-at-11.11.28-AM.jpeg",
        img2:"https://www.ivyproschool.com/wp-content/uploads/2022/02/logo.png",
        img3:"https://www.ivyproschool.com/wp-content/uploads/2015/07/logo.jpg",
        couseName:"Data Science with Machine Learning, Artificial Intelligence & Deep Learning",
        courseDetails:[{logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"},
         {logo:"https://www.ivyproschool.com/wp-content/uploads/2022/02/certificate_p.png",
         text:"Joint Certification from Nasscom and Ivy Pro School"}
        
        ]
    }
]

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
            <img src={e.img2} alt="" width="100px"/>
            <img src={e.img3} alt="" width= "80px" />
        </div>
        </div>
             
              
        <div className="courseName">
            <h3>{e.couseName}</h3>
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
            <button className='viewbtn'>VIEW PROGRAM</button>
        </div>
        </div>
           ))
        }
    </div>
  )
}

export default Courses