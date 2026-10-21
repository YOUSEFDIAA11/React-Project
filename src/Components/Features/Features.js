import React from 'react'
import img from '../../assets/img.png'
import './Features.css'
const Features = () => {
  return (
    <>
    <section>
      <div className='features-container'>
        <img className='img' src={img} alt='lizard-img' />

        <div className='Text-container'>
          <h2>A Unique and Fascinating Reptile</h2>
        <p>The leopard gecko is a small, hardy lizard known for its
      beautiful spotted pattern and calm nature. It is native to
      rocky and arid regions, where it lives in burrows and crevices.
      </p>
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Features;
