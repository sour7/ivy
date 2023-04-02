import React from 'react'
import "./subscribe.css"
const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className="dicscuss">
        <h3>Discuss Your Data Career Path With Our Founders</h3>
      </div>
      <div className="bookaSlot">
        <div className='slot'>BOOK YOUR SLOT</div>
        <p className='callUs'>Call us <a href="tel:+4733378901" className='calno'>+47 333 78 901</a></p>
      </div>
      <div class="image-container">
       <div class="overlay">
       <div class="text">
        <div className='number'>
          <p>26,000+</p>
          <p>300+</p>
          <p>400+</p>
          <p>20,000+</p>
        </div>
        <div className='info'>
          For Information, Career Advices & Job Alerts on Analytics, Actuarial Science:
        </div>
        <div className='blogbtn'>
        <button className='btn1'>   SUBSCRIBE TO OUR BLOG</button>
        
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Subscribe