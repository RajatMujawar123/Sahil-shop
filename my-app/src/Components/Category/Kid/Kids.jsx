import React from 'react'
import {Link} from "react-router-dom"
import boycategory from '../../../img/boysphoto.jpg'
import girlcategory from '../../../img/girlsphoto.jpg'
import "../../../../src/style/home.css"
import "../../../style/home.css"



        const Kids = () => {
            return (
        <>

     <div id='details'><h1>Kids Category</h1></div>

    <div className='container'>
                <div className='innerDiv'>

                    <Link to="/boy">
                        <img src={boycategory} alt="" />
                    </Link>
                    <h1>Kid Boys</h1>
                </div>

                <div className='innerDiv'>

                    <Link to="/girl">
                        <img src={girlcategory} alt="" />
                    </Link>
                    <h1>Kid Girls</h1>
                </div>

              

            </div>
        </>
    )
}

export default Kids