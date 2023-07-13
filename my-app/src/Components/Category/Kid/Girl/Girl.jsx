import React from 'react'
import {Link} from "react-router-dom"
import ksandal from '../../../../img/girls_sandle.jpg'
import kchappal from '../../../../img/girls_chappal.jpg'
import kshoes from '../../../../img/girls_shoes.jpg'
import "../../../../style/home.css"

const Girl = () => {
  return (
    <>

    <div id='details'><h1>Kids Girls Category</h1></div>

   <div className='container'>
               <div className='innerDiv'>

                   <Link to="/kidsGirlSandal">
                       <img src={kchappal} alt="" />
                   </Link>
                   <h1>sandal</h1>
               </div>

               <div className='innerDiv'>

                   <Link to="/kidsGirlChappal">
                       <img src={ksandal} alt="" />
                   </Link>
                   <h1>Chappal</h1>
               </div>

               <div className='innerDiv'>

                   <Link to="/kidsGirlShoes">
                       <img src={kshoes} alt="" />
                   </Link>
                   <h1>Shoes</h1>
               </div>

           </div>
       </>
  )
}

export default Girl