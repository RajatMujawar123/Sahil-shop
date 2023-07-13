import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { mensGetFailureAction, mensGetRequestAction, mensGetSuccessAction } from '../../../Redux/Mens/action'
import axios from 'axios'
import "../../../style/mensChappal.css"
import whatsApp from "../../../img/icons8-whatsapp-48.png"
import Pagination from '../../../Company/Pagination'

 const MenChappal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { mensData, isloading } = useSelector((store)=>{
    return {
      mensData : store.mensChappal.mensData,
      isloading : store.mensChappal.isloading
    }
  },shallowEqual)

  const getChappal = ()=>{
    dispatch(mensGetRequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/mens_chappal`).then((res)=>{
      //console.log(res.data)
      dispatch(mensGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(mensGetFailureAction())
    })
  }

  useEffect(()=>{
    getChappal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mensData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div> 
    <div>Chappal</div>

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
      totalPages={Math.ceil(mensData.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
    </div>
  )
}


export default MenChappal
