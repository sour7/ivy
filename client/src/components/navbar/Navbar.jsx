import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbar.css'
const Navbar = () => {
  const [courses, setCourses]=useState(false)

 
  return (
    <div className='navber'>
      <div className='topbar'>
        <div className='emptyDiv'></div>
        <div className='topphone'><span>  →Call us today!</span> <a  href="tel:7676882222" style={{'color':'grey'}} ><b>7676882222</b>  </a></div>
        <div className='toplocation'>   <LocationOnIcon/> <span>Find us</span></div>
        <div className='topemail'>  <a className="noDecoration" href="tel:7676882222" style={{'color':'grey'}}> <EmailIcon/> <span>info@ivyproschool.com</span></a></div>
        <div className='emptyDiv2'></div>
      </div>
      <div className='mainNav'>
        <div className='logos'>
        
          <div className="ivylogo">
          <img src="https://ivyproschool.com/wp-content/uploads/2015/07/logo.jpg" alt="ivyLogo" />
          </div>
          <div className="social">
           <img src="https://www.ivyproschool.com/wp-content/themes/IVYschool/images/gofb.png" alt="google rating" width="34px" />
           </div>

         
        </div>
        <div className="menu">
          <div className="home">HOME</div>
          <div className="pap">PAY AFTER PLACEMENT</div>
          <div className='custom-select' onMouseOver={()=>setCourses(!courses)}>
                    <span>COURSES</span> 
                    <KeyboardArrowDownIcon/>
          </div>
        
          <div className="event">EVENT</div>
          <div className="blog">BLOG</div>
          <div className="corporates">FOR CORPORATES</div>
          <div className="contect"></div>

        </div>
        <div className="contectBox">
          <div><img src="https://www.ivyproschool.com/wp-content/themes/IVYschool/images/phone-call.png" alt="" width="50px" /></div>
          <div><button className='enquire'>Enquire Now</button></div>
        </div>
      </div>
     {
      courses&&
      <div className='course-option'>
      <p className='navCourse'>DATA SCIENCE </p>
      <p className='navCourse'>CLOUD DATA ENGINEERING</p>
      <p className='navCourse'>ANALYTICS</p>
      <p className='navCourse'>PICK YOUR TOOL</p>
    </div>
     }
    </div>
  )
}

export default Navbar