import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonials.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};
const Testimonials = () => {
  const testimonials = [
    {
      img: "https://www.ivyproschool.com/wp-content/uploads/2016/10/achint-min.png",
      text: "I would like to take an opportunity to thank the entire Ivy Team for cooperating with me.You are doing a fabulous job in nurturing students like me.With God's Grace and your support I am extremely happy to tell you that I have been placed in EMC square as an Associate operations Business Analyst. So thank you so much for all the efforts that you guys have put in for our better future.",

      name: "Abhishek Das",
      company: "CreditVidya",
      position: "Senior Data Scientist",
    },
    {
      img: "https://www.ivyproschool.com/wp-content/uploads/2016/10/achint-min.png",
      text: "I would like to take an opportunity to thank the entire Ivy Team for cooperating with me.You are doing a fabulous job in nurturing students like me.With God's Grace and your support I am extremely happy to tell you that I have been placed in EMC square as an Associate operations Business Analyst. So thank you so much for all the efforts that you guys have put in for our better future.",

      name: "Abhishek Das",
      company: "CreditVidya",
      position: "Senior Data Scientist",
    },
  ];
  return (
    <div className="testimonialBox">
      <h2 className="title">Testimonials</h2>
     
        <Carousel
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
        >
          {testimonials.map((e, id) => (
            <div className="containertestimonial" key={id}>
                 <div className="testimonialCarusal">
              <img
                src={e.img}
                alt=""
                width="50px"
                height="50px"
                className="profilePic"
              /></div>
              <div className="testimonialdetails">
                <p className="desc">"{e.text}"</p>
               <div className="userdetails">
               <p><b>{e.name}</b></p>
                <p>{e.company}</p>
                <p>{e.position}</p>
               </div>
              </div>
            </div>
          ))}
        </Carousel>

       
    </div>
   
  );
};

export default Testimonials;
