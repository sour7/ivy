import React from 'react'
import Crousel from "../crousel/Crousel"
import "./corporates.css"
const responsive4 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  }
};
// function CorporateCrousel(){
//   const list=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMit3U7WaAvtsxN5OhJye32qhnhWE4HRcCCbBmYD1Z&s",
//   "https://logos-world.net/wp-content/uploads/2021/02/Honeywell-Logo.png",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcS8N8-FlyFKGgbBO-tktqFsELnRKJnUg_fkJkwkd_vg&s",
//   "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png",
//   "https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png"
//  ];
//   return(
//     <Crousel data={list} res={responsive4} width="200px" height="70px" />
//   )
// }

const Corporates = () => {
  const list=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMit3U7WaAvtsxN5OhJye32qhnhWE4HRcCCbBmYD1Z&s",
  "https://logos-world.net/wp-content/uploads/2021/02/Honeywell-Logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcS8N8-FlyFKGgbBO-tktqFsELnRKJnUg_fkJkwkd_vg&s",
  "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png"
 ];
// const list=[
//   "zvxfxbf","xvbgd","xvdbhjg"
// ]


 
  return (
    <div className='corporatesData'>
 
   
        <div className="corporatesWraper">
            <div className='forCor'>FOR CORPORATES</div>
            <div className='text1'>
            <h4>Official Learning Partner of Fortune 1000 Companies</h4>
            </div>
            <div className='text2'>Large corporate houses have trusted Ivy for their training needs.
             With Ivy, you get the same learning experience what these companies trust Ivy for.</div>
          <div className='lernMore'>  <i >Learn More</i></div>
        </div>
    
          
   
    <div className='corporateCompany'>
    <Crousel data={list} res={responsive4} width="200px" height="70px" />
    </div>
    </div>
  )
}

export default Corporates