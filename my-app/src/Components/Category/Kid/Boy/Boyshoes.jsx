import React, { useEffect, useState } from 'react'
import Pagination from '../../../../Company/Pagination';
import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { boys_Shoes_Get_FailureAction, boys_Shoes_Get_RequestAction, boys_Shoes_Get_SuccessAction } from '../../../../Redux/Kids/action';
import whatsApp from "../../../../img/icons8-whatsapp-48.png"

const Boyshoes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { boys_shoes_data, isloading } = useSelector((store)=>{
    return {
      boys_shoes_data : store.boys_Shoes.boys_shoes_data,
      isloading : store.boys_Shoes.isloading
    }
  },shallowEqual)

  const getShoes = ()=>{
    dispatch(boys_Shoes_Get_RequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/kids_boys_shoes`).then((res)=>{
      console.log(res.data)
      dispatch(boys_Shoes_Get_SuccessAction(res.data))
    }).catch((err)=>{
      dispatch(boys_Shoes_Get_FailureAction())
    })
  }

  useEffect(()=>{
    getShoes()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = boys_shoes_data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Shoes</h1>

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
      totalPages={Math.ceil(boys_shoes_data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }

    </div>
  )
}

export default Boyshoes