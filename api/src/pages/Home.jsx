import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Crousel from '../components/crousel/Crousel'
import Features from '../components/features/Features'
import Alumni from '../components/alumni/Alumni';
import Courses from '../components/courses/Courses';
import Corporates from '../components/coporates/Corporates';
import Testimonials from '../components/testimonials/Testimonials';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../components/footer/Footer';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  }
};

const Home = () => {
  let banner=[
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
    "data:image/jpeg;base64,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"
  ]



  return (
    <div>
    <Navbar/>
    <Crousel data={banner} res={responsive} width="100%" height='90%'/>
    <div style={{'backgroundColor':'aliceblue', 'paddingBottom':'50px'}}> 
     <Features />
    </div>
    <Alumni/>
     <Courses/>
     <Corporates/>
     <Testimonials/>
     <Subscribe/>
     <Footer/>
   
   
    </div>
  )
}

export default Home