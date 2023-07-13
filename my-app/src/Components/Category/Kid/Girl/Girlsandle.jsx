import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../Company/Pagination';
import { girls_Sandal_Get_Failure_Action, girls_Sandal_Get_Request_Action, girls_Sandal_Get_Success_Action } from '../../../../Redux/Kids/Girls/action';

const Girlsandle = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { girls_Sandal_Data, isloading } = useSelector((store)=>{
    return {
      girls_Sandal_Data : store.girls_Chappal.girls_Sandal_Data,
      isloading : store.girls_Chappal.isloading
    }
  },shallowEqual)

  const getSandal = ()=>{
    dispatch(girls_Sandal_Get_Request_Action())
    axios.get(`http://localhost:8000/kids_girls_sandals`).then((res)=>{
      console.log(res.data)
      dispatch(girls_Sandal_Get_Success_Action(res.data))
    }).catch((err)=>{
      dispatch(girls_Sandal_Get_Failure_Action())
    })
  }

  useEffect(()=>{
    getSandal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = girls_Sandal_Data.slice(
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
    totalPages={Math.ceil(girls_Sandal_Data.length / productsPerPage)}
    onPageChange={paginate}

    />
   }

  </div>
  )
}

export default Girlsandle