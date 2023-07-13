import React from 'react'
import imgfooter from '../img/publicimgshoes.jpg'
function Footer() {
  return (
    <div className='footer'>
        <div className="imgfooter">
        <img src={imgfooter} alt="" />

        </div>
        <div className='contact'>
          <div className='address'>What's App</div>
          <div className= 'address'>Contact</div>
          <div className='address'>Address</div>
        </div>
    </div>
  )
}

export default Footer