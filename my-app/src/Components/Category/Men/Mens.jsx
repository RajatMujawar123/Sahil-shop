import React from 'react'
import {Link} from "react-router-dom"
import "../../../style/home.css"
import ksandal from '../../../img/boys_sandle.jpg'
import kchappal from '../../../img/boys_chappal.jpg'
import kshoes from '../../../img/boys_shoes.jpg'


const Mens = () => {
  return (
    <>
    <div id='details'><h1>Mens Category</h1></div>

    <div className='container'>
                <div className='innerDiv'>
                    <Link to="/mensSandal">
                        <img src={kchappal} alt="" />
                    </Link>
                    <h1>sandal</h1>
                </div>

                <div className='innerDiv'>
                    <Link to="/mensChappal">
                        <img src={ksandal} alt="" />
                    </Link>
                    <h1>Chappal</h1>
                </div>

                <div className='innerDiv'>
                    <Link to="/mensShoes">
                        <img src={kshoes} alt="" />
                    </Link>
                    <h1>Shoes</h1>
                </div>

            </div>
    
    </>
  )
}

export default Mens