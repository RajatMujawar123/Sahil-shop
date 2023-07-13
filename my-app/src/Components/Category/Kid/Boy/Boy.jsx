import React from 'react'
import {Link} from "react-router-dom"
import ksandal from '../../../../img/boys_sandle.jpg'
import kchappal from '../../../../img/boys_chappal.jpg'
import kshoes from '../../../../img/boys_shoes.jpg'
import "../../../../style/home.css"


const Boy = () => {
    return (
        <>

        <div id='details'><h1>Kids Boy Category</h1></div>
   
       <div className='container'>
                   <div className='innerDiv'>
   
                       <Link to="/kidsBoySandal">
                           <img src={kchappal} alt="" />
                       </Link>
                       <h1>sandal</h1>
                   </div>
   
                   <div className='innerDiv'>
   
                       <Link to="/kidsBoyChappal">
                           <img src={ksandal} alt="" />
                       </Link>
                       <h1>Chappal</h1>
                   </div>
   
                   <div className='innerDiv'>
   
                       <Link to="/kidsBoyShoes">
                           <img src={kshoes} alt="" />
                       </Link>
                       <h1>Shoes</h1>
                   </div>
   
               </div>
           </>
   
    )
}

export default Boy