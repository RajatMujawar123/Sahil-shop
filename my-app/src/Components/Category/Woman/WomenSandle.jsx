import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { WomensSandalGetFailureAction, WomensSandalGetRequestAction, WomensSandalGetSuccessAction } from '../../../Redux/Womens/action'
import "../../../style/mensChappal.css"
import Pagination from '../../../Company/Pagination'
import whatsApp from "../../../img/icons8-whatsapp-48.png"

const WomenSandle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const dispatch = useDispatch()
  let { womens_Sandal_Data, isloading } = useSelector((store)=>{
    return {
      womens_Sandal_Data : store.womens_Sandal.womens_Sandal_Data,
      isloading : store.womens_Sandal.isloading
    }
  },shallowEqual)

  const getSandal = ()=>{
    dispatch(WomensSandalGetRequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/women_sandlas`).then((res)=>{
      //console.log(res.data)
      dispatch(WomensSandalGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(WomensSandalGetFailureAction())
    })
  }

  useEffect(()=>{
    getSandal()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = womens_Sandal_Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>     
    <div><h1>Sandal</h1></div>

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
      totalPages={Math.ceil(womens_Sandal_Data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
    </div>
  )
}

export default WomenSandle