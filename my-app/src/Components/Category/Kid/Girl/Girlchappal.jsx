import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../Company/Pagination';
import { girls_Chappal_Get_Failure_Action, girls_Chappal_Get_Request_Action, girls_Chappal_Get_Success_Action } from '../../../../Redux/Kids/Girls/action';
import whatsApp from "../../../../img/icons8-whatsapp-48.png"



const Girlchappal = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { girls_Chappal_Data, isloading } = useSelector((store)=>{
    return {
      girls_Chappal_Data : store.girls_Chappal.girls_Chappal_Data,
      isloading : store.girls_Chappal.isloading
    }
  },shallowEqual)

  const getChappal = ()=>{
    dispatch(girls_Chappal_Get_Request_Action())
    axios.get(`https://shop-backend-noq9.onrender.com/kids_girls_chppal`).then((res)=>{
      console.log(res.data)
      dispatch(girls_Chappal_Get_Success_Action(res.data))
    }).catch((err)=>{
      dispatch(girls_Chappal_Get_Failure_Action())
    })
  }

  useEffect(()=>{
    getChappal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = girls_Chappal_Data.slice(
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
      totalPages={Math.ceil(girls_Chappal_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }

    </div>
  )
}

export default Girlchappal