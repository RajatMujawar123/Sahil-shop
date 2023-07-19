import React from 'react'
import "../style/navbar.css"
import { FcSearch } from "react-icons/fc";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div id='fixed'>
      <div className='navbar'>
     
        <div className='navDiv'>
        <Link  to="/">
        <img id="logo" src="https://www.zafcollection.com/static/media/ZAFLOGO.d188428ce1093cd1a4ac.png" alt="" />
        </Link>
       </div>
        

        <div className='navDiv' id='category' >
          <Link id="link" to="/"><h3 className='content'>Home</h3></Link>
          <h3 className='content'>Trending</h3>
          <Link to="/admin"> <button>Admin</button>  </Link>
          
          <input type="text" placeholder='Search' />
          <label ><FcSearch id='searchLogo'/></label>
        </div>

      </div>
    </div>
  )
}

export default Navbar
