import React from 'react'
import './features.css'
const Features = () => {
    const data=[
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/2-01-1536x1536-1.png", text:"4.9/5.0 Rating on Google and Facebook"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/1-01-1-1536x1536-1.png", text:"26000+ Alumni in 300+ Data Science Firm"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/3-01-1536x1536-1.png", text:"400+ Educators Elite Industry Experienced Mentors from IIT,IIM,ISI,US Universities"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/4-01-1536x1536-1.png", text:"Capstone Projects and Internships"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/5-01-1536x1536-1.png", text:"Lifetime Placement Support"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/6-01-1536x1536-1.png", text:"Live Face to Face & Online Classes"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/7-01-1536x1536-1.png", text:"Official Learning Partner of Fortune 1000 Companies"},
    {img:"https://www.ivyproschool.com/wp-content/uploads/2022/02/8-01-1536x1536-1.png", text:"Setting Benchmarks since 2007"},
    
]

  return (
    <div className='feautre'>
       {
        data.map((e, id)=>(
            <div className='card' key={id}>
             <div className='icon'>
            <img src={e.img} alt="" className='iconlogo' />
            </div>
        <div className='deatils'>{e.text}</div>
    </div>
        ))
       }
      
    </div>
  )
}

export default Features