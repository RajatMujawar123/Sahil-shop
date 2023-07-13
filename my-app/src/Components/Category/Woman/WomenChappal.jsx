import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { womensChappalGetFailureAction, womensChappalGetRequestAction, womensChappalGetSuccessAction } from '../../../Redux/Womens/action'
import "../../../style/mensChappal.css"
import Pagination from '../../../Company/Pagination'
import whatsApp from "../../../img/icons8-whatsapp-48.png"


const WomenChappal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const dispatch = useDispatch()
  let { womens_Chappal_Data, isloading } = useSelector((store)=>{
    return {
      womens_Chappal_Data : store.womens_Chappal.womens_Chappal_Data,
      isloading : store.womens_Chappal.isloading
    }
  },shallowEqual)

  const getChappal = ()=>{
    dispatch(womensChappalGetRequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/women_chappal`).then((res)=>{
      //console.log(res.data)
      dispatch(womensChappalGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(womensChappalGetFailureAction())
    })
  }

  useEffect(()=>{
    getChappal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = womens_Chappal_Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>  

    <div><h1>Chappal</h1></div>

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
      totalPages={Math.ceil(womens_Chappal_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }

    </div>
  )
}

export default WomenChappal