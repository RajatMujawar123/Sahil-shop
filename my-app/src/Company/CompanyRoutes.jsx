import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Paragoan } from './Paragoan'
import { Walkaroo } from './Walkaroo'
import { Walkmate } from './Walkmate'
import { Spark } from './Spark'
import Home from '../Components/Home'



export const CompanyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/paragoan' element={<Paragoan />} />
                <Route path='/walkaroo' element={<Walkaroo />} />
                <Route path='/walkmate' element={<Walkmate />} />
                <Route path='/spark' element={<Spark />} />


            </Routes>
        </div>
    )
}
