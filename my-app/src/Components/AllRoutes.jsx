import React from 'react'
import {Route,Routes}from "react-router-dom"
import Home from './Home'
import Mens from './Category/Men/Mens'
import Women from './Category/Woman/Women'
import Kids from './Category/Kid/Kids'
import MenShoes from './Category/Men/MenShoes'
import MenSandle from './Category/Men/MenSandle'
import MenChappal from './Category/Men/MenChappal'
import WomenShoes from './Category/Woman/WomenShoes'
import WomenChappal from './Category/Woman/WomenChappal'
import WomenSandle from './Category/Woman/WomenSandle'
import Boy from './Category/Kid/Boy/Boy'
import Girl from './Category/Kid/Girl/Girl'
import Girlshoes from './Category/Kid/Girl/Girlshoes'
import Girlsandle from './Category/Kid/Girl/Girlsandle'
import Girlchappal from './Category/Kid/Girl/Girlchappal'
import Boyschappal from './Category/Kid/Boy/Boychappal'
import Boyshoes from './Category/Kid/Boy/Boyshoes'
import BoysSandal from './Category/Kid/Boy/BoySandal'


const AllRoutes = () => {
  return (
    <Routes>
       <Route path='*' element={<h1>Page Not Found</h1>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/women' element={<Women/>}/>

        <Route path='/mensShoes' element={<MenShoes/>}/>
        <Route path='/mensChappal' element={<MenChappal/>}/>
        <Route path='/mensSandal' element={<MenSandle/>}/>

        <Route path='/womenShoes'  element={<WomenShoes/>}/>
        <Route path='/womenChappal'  element={<WomenChappal/>}/>
        <Route path='/womenSandal'  element={<WomenSandle/>}/>

        <Route path='/boy'  element={<Boy/>}/>
        <Route path='/kidsBoySandal' element={<BoysSandal/>}/>
        <Route path='/kidsBoyChappal' element={<Boyschappal/>}/>
        <Route path='/kidsBoyShoes' element={<Boyshoes/>}/>

        <Route path='/girl'  element={<Girl/>}/>
        <Route path='/kidsGirlSandal' element={<Girlsandle/>}/>
        <Route path='/kidsGirlChappal' element={<Girlchappal/>}/>
        <Route path='/kidsGirlShoes' element={<Girlshoes/>}/>
    </Routes>
  )
}

export default AllRoutes