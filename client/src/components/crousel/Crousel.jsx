import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Crousel = (props) => {
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
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
>
{
  props?.data?.map((e, id)=>(
    <div key={id}>
    <img src={e} alt="pics" style={style} />
  
    </div>
  ))
}
  
</Carousel>
  )
}

export default Crousel