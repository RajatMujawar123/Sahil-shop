import React from 'react'
import { Link } from 'react-router-dom'
import ksandal from '../../../img/girls_sandle.jpg'
import kchappal from '../../../img/girls_chappal.jpg'
import kshoes from '../../../img/girls_shoes.jpg'
import "../../../style/home.css"


const Women = () => {
  return (
    <>   
     <div id='details'><h1>Women Category</h1></div>

<div className='container'>
            <div className='innerDiv'>

                <Link to="/womenSandal">
                    <img src={kchappal} alt="" />
                </Link>
                <h1>sandal</h1>
            </div>

            <div className='innerDiv'>

                <Link to="/womenChappal">
                    <img src={ksandal} alt="" />
                </Link>
                <h1>Chappal</h1>
            </div>

            <div className='innerDiv'>

                <Link to="/womenShoes">
                    <img src={kshoes} alt="" />
                </Link>
                <h1>Shoes</h1>
            </div>

        </div>

    </>
  )
}

export default Women