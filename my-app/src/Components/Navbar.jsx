import React from 'react'
import "../style/navbar.css"
import { FcSearch } from "react-icons/fc";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div id='fixed'>
      <div className='navbar'>
        <div>
        <img id="logo" src="https://www.zafcollection.com/static/media/ZAFLOGO.d188428ce1093cd1a4ac.png" alt="" />
        </div>

        <div id='category' >
          <Link id="link" to="/"><h3 className='content'>Home</h3></Link>
          <h3 className='content'>Trending</h3>
          <h3 className='content'>Category</h3>
          <input type="text" placeholder='Search' />
          <label ><FcSearch id='searchLogo'/></label>
        </div>

      </div>
    </div>
  )
}

export default Navbar
