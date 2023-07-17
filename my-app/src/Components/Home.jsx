import React from 'react'
import mens from '../img/Mens.jpg'
import women from '../img/woman.jpg'
import kids from '../img/kids.png'
import paragoan from '../img/paragoan.png'
import walkaroo from '../img/walkaroo.png'
import walkmate from '../img/Walkmate.png'
import spark from     '../img/Sparx.png'

import "../style/home.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
       
            <div className='container' >
                <div className='innerDiv'>
                    <Link to="/mens">
                        <img src={mens} alt="" />
                    </Link>
                    <h1>MENS</h1>
                </div>

                <div className='innerDiv'>
                    <Link to="/women">
                        <img src={women} alt="" />
                    </Link>
                    <h1>WOMENS</h1>
                </div>

                <div className='innerDiv'>
                    <Link to="/kids">
                        <img src={kids} alt="" />
                    </Link>
                    <h1>KIDS</h1>
                </div>

            </div>
            
            
            <div className='company'>
                <div className='logo'>
                    <Link to="/paragoan">
                        <img src={paragoan} alt="" />
                    </Link>
                </div>
                <div  className='logo' >
                    <Link to="/walkaroo">
                        <img src={walkaroo} alt="" />
                    </Link>
                </div>
                <div className='logo'>
                    <Link to="/walkmate">
                        <img src={walkmate} alt="" />
                    </Link>
                </div>
                <div className='logo'>
                    <Link to="/spark">
                        <img src={spark} alt="" />
                    </Link>
                </div>
            </div>
           

        </>
    )
}

export default Home