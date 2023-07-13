import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Womens_Shoes_Get_Failure_Action, Womens_Shoes_Get_Request_Action, Womens_Shoes_Get_Success_Action } from '../../../Redux/Womens/action'
import axios from 'axios'
import "../../../style/mensChappal.css"
import Pagination from '../../../Company/Pagination'

const WomenShoes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const dispatch = useDispatch()
  let { womens_Shoes_Data, isloading } = useSelector((store)=>{
    return {
      womens_Shoes_Data : store.womens_shoes.womens_Shoes_Data,
      isloading : store.womens_shoes.isloading
    }
  },shallowEqual)

  const getShoes = ()=>{
    dispatch(Womens_Shoes_Get_Request_Action())
    axios.get(`http://localhost:8000/women_chappal`).then((res)=>{
      console.log(res.data)
      dispatch(Womens_Shoes_Get_Success_Action(res.data))
    }).catch((err)=>{
      dispatch(Womens_Shoes_Get_Failure_Action())
    })
  }

  useEffect(()=>{
    getShoes()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = womens_Shoes_Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>  
    <div><h1>Shoes</h1></div>

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
      totalPages={Math.ceil(womens_Shoes_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
    </div>
  )
}

export default WomenShoes