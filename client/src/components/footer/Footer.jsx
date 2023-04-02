import React, { useState } from 'react'
import "./footer.css"
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import EmailIcon from '@mui/icons-material/Email';
import CityList from '../citylist/CityList';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    

    const cities = [
        { city: "Kolkata Campus", 
        address: "5th Floor 14B, Camac Street. Kolkata - 700017 +917676882222 (Central Helpline)" },
        { city: "Bangalore campus",
         address: "7th Floor HM Vibha Towers, Hosur Road, Near Forum Mall Chikku Lakshmaiah Layout, Adugodi, Kormangala, Bangalore – 560029 +91 7676882222 (Bangalore" },
        { city: "New Delhi campus",
         address: "A-4, 3rd floor Adhchini Road, Block A, Sarvodaya Enclave, Nearest metro station Hauz khas New Delhi 1100024 / +91 7676882222 (Delhi)" },
        { city: "Pune campus", 
        address: "Ivy Professional School F.C. ROAD Worklab, 318/19, Dhyaneshwar Paduka Chowk,Opp. Deccan Education Society Shivajinagar,   FC Road, Pune - 411016 +917676882222 (Pune)" },
        { city: "Mumbai Campus", 
        address: "Ivy Knowledge Services (P) Ltd. 16th Floor, Lodha Supremus Opposite MTNL Off JVLR, Saki Vihar Road, Powai Mumbai-400072. 7676882222 (Mumbai)" }
      ];
      

  return (
    <div className="footer">
        <div className="company">
            <h2 style={{paddingBottom:"40px"}}>COMPANY</h2>
            <p>About IVY Pro School</p>
        <p>Management Team</p>
        <p>Faculty</p>
        <p>Careers at IVY</p>
        <p>College Ambassador</p>
        <p>IVY Blog</p>
        <p>Certificate E-verification</p>
        <p>Contact Us</p>
        <p>Learning Management System</p>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Cancellation Policy</p>
        </div>
        <div className="footercourse">
        <h2 style={{paddingBottom:"40px"}}>COURSES</h2>
        <p>Nasscom Certified Data Science with Machine Learning, AI and DL Course</p>
        <p>Data Science with Visualization Certification Course</p>
        <p>Cloud Data Engineering Certification Course</p>
        <p>Data Analytics with Visualization Certification Course</p>
        <p>Business Analytics Certification Course</p>
        <p>Deep Dive in Data Science with Machine Learning, AI and DL Course</p>
       
        </div>
        <div className="coaching">
        <h2 style={{paddingBottom:"40px"}}>ACTUARIAL COACHING</h2>
        <p>Actuarial Common Entrance Test (ACET) Coaching</p>
        <p>Core Technical (CT) Papers Coaching</p>
        </div>
        <div className="needHelp">
        <h2 style={{paddingBottom:"40px"}}>NEED HELP?</h2>
        <div className='fixthis'><CorporateFareIcon/> <p>Ivy Knowledge Services (P) Ltd.</p></div>
        <div className='fixthis'><WifiCalling3Icon/> <p>+91 7676882222</p></div>
        <div className='fixthis'><EmailIcon/><a href="mailto:info@ivyproschool.com" style={{"color":"white"}}>info@ivyproschool.com</a></div>
    
        <CityList cities={cities} />
    <div className="socialMedia">
      <div className="icons"><TwitterIcon/></div>
      <div className="icons">      <FacebookIcon/></div>
      <div className="icons">      <LinkedInIcon/></div>
      <div className="icons">      <YouTubeIcon /></div>

      
    </div>

        </div>
    </div>
  )
}

export default Footer