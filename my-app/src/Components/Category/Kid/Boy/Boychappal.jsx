
import Pagination from '../../../../Company/Pagination';
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { boysGetFailureAction, boysGetRequestAction, boysGetSuccessAction } from '../../../../Redux/Kids/action';
import "../../../../style/mensChappal.css"
import whatsApp from "../../../../img/icons8-whatsapp-48.png"

const Boychappal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { boys_Chappal_Data, isloading } = useSelector((store)=>{
    return {
      boys_Chappal_Data : store.boys_Chappal.boys_Chappal_Data,
      isloading : store.boys_Chappal.isloading
    }
  },shallowEqual)

  const getChappal = ()=>{
    dispatch(boysGetRequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/kids_boys_chppal`).then((res)=>{
     // console.log(res.data)
      dispatch(boysGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(boysGetFailureAction())
    })
  }

  useEffect(()=>{
    getChappal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = boys_Chappal_Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div>  
    <h1>Chappal</h1>
    <div id='mainChappalDiv'> 
    {
    currentProducts.length > 0 && currentProducts.map((el)=>{
      return   <div className='mainChappalInnerViv' key={el.id}> 
             <img src={el.image} alt="" />
               <h4>{`Brand : ${el.brand}`}</h4>
               <p>{`Price : ${el.price}`}</p>  
               <div id='app'> <a href='https://wa.me/919823111057?text=hi...'> <img  src={whatsApp} alt="" />  </a>  </div>         
         </div>       
   })
    }
    
     </div>

    
     {
      isloading && <div className="loader">Loading...</div>
    }

{
      <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(boys_Chappal_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
  
    </div>
  )
}

export default Boychappal