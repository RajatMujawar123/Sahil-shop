import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { boysSandalGetFailureAction, boysSandalGetRequestAction, boysSandalGetSuccessAction } from '../../../../Redux/Kids/action'
import axios from 'axios'
import Pagination from '../../../../Company/Pagination'
import "../../../../style/mensChappal.css"

const BoySandal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { boys_Sandal_Data, isloading } = useSelector((store)=>{
    return {
      boys_Sandal_Data : store.boys_Sandal.boys_Sandal_Data,
      isloading : store.boys_Sandal.isloading
    }
  },shallowEqual)

  const getSandal = ()=>{
    dispatch(boysSandalGetRequestAction())
    axios.get(`http://localhost:8000/kids_boys_sandals`).then((res)=>{
      console.log(res.data)
      dispatch(boysSandalGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(boysSandalGetFailureAction())
    })
  }

  useEffect(()=>{
    getSandal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = boys_Sandal_Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Sandal</h1>

      <div id='mainChappalDiv'> 
    {
    currentProducts.length > 0 && currentProducts.map((el)=>{
      return   <div className='mainChappalInnerViv' key={el.id}> 
             <img src={el.image} alt="" />
               <h4>{`Brand : ${el.brand}`}</h4>
               <p>{`Price : ${el.price}`}</p>           
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
      totalPages={Math.ceil(boys_Sandal_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
  
    </div>

  
  )
}

export default BoySandal
