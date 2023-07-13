import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { girls_Shoes_Get_Failure_Action, girls_Shoes_Get_Request_Action, girls_Shoes_Get_Success_Action } from '../../../../Redux/Kids/Girls/action';
import Pagination from '../../../../Company/Pagination';
import axios from 'axios';
import whatsApp from "../../../../img/icons8-whatsapp-48.png"

const Girlshoes = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch()
  let { girls_shoes_data, isloading } = useSelector((store)=>{
    return {
      girls_shoes_data : store.girls_Shoes.girls_shoes_data,
      isloading : store.girls_Shoes.isloading
    }
  },shallowEqual)

  const getShoes = ()=>{
    dispatch(girls_Shoes_Get_Request_Action())
    axios.get(`https://shop-backend-noq9.onrender.com/kids_girls_shoes`).then((res)=>{
      console.log(res.data)
      dispatch(girls_Shoes_Get_Success_Action(res.data))
    }).catch((err)=>{
      dispatch(girls_Shoes_Get_Failure_Action())
    })
  }

  useEffect(()=>{
    getShoes()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = girls_shoes_data.slice(
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
    totalPages={Math.ceil(girls_shoes_data.length / productsPerPage)}
    onPageChange={paginate}

    />
   }

  </div>

  )
}

export default Girlshoes