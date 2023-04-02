import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const VideoCrousel = (props) => {
    // console.log("first", props.data)
  const {width, height, border, padding}= props
  const style = {
    width,
    height,
    border,
    padding
  };
  
  return (
    <Carousel
    draggable={false}
   showDots={true}
    responsive={props.res}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    dotListClass="custom-dot-list-style"
>
{
  props?.data?.map((e, id)=>(
    <div key={id}>
    <iframe style={style} src={e} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
  
    </div>
  ))
}
  


</Carousel>
  )
}

export default VideoCrousel