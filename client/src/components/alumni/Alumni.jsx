import React from 'react'
import './alumni.css'
import Crousel from '../crousel/Crousel'
import VideoCrousel from '../crousel/VideoCrousel';

const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  }
};
const responsive3 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  }
};

const Alumni = () => {

   const companyList=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMit3U7WaAvtsxN5OhJye32qhnhWE4HRcCCbBmYD1Z&s",
   "https://logos-world.net/wp-content/uploads/2021/02/Honeywell-Logo.png",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcS8N8-FlyFKGgbBO-tktqFsELnRKJnUg_fkJkwkd_vg&s",
   "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png",
   "https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png"
  ];
  const videolist=["https://www.youtube.com/embed/oEuKSLn41pc",
  "https://www.youtube.com/embed/Lm4Omdx5ae4" 
]

  return (
    <div className='alumni'>
        <img src="https://www.ivyproschool.com/wp-content/themes/IVYschool/images/CERTI.jpg" alt="img"  />
          <h4 className='alumniText'>Where our Alumni Work</h4>
          <div className='alumniCrousel'>
          <Crousel data={companyList} res={responsive1} width="250px" height='100px' border='1px solid gray' padding='0 15px' />
          </div>
          <div className="videoStories">
          <div className="successStories">
            <h1 className='story'>Binge Watch Alumni Success Stories</h1>
          </div>
          <div className="videoCrousel">
          <VideoCrousel data={videolist} res={responsive3} width="100%" height="300px" />
          </div>
        </div>
    </div>
  )
}

export default Alumni