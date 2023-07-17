import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { mensGetFailureAction, mensSandalGetRequestAction, mensSandalGetSuccessAction } from '../../../Redux/Mens/action'
import axios from 'axios'
import "../../../style/mensChappal.css"
import Pagination from '../../../Company/Pagination'
import whatsApp from "../../../img/icons8-whatsapp-48.png"

 const MenSandle = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const dispatch = useDispatch()
  let { mensSandal, isloading } = useSelector((store)=>{
    return {
      mensSandal : store.mensSandal.mensSandalData,
      isloading : store.mensSandal.isloading
    }
  },shallowEqual)

  

  const getSandal = ()=>{
    dispatch(mensSandalGetRequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/mens_Sandlas`).then((res)=>{
      console.log(res.data)
      dispatch(mensSandalGetSuccessAction(res.data))
    }).catch((err)=>{
      dispatch(mensGetFailureAction())
    })
  }

  useEffect(()=>{
    getSandal()
  },[])

   

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = mensSandal.slice(
     indexOfFirstProduct,
     indexOfLastProduct
   );
 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 

  return (
    <div>
      <h1>Sandal</h1>

      <div id='mainChappalDiv'> 
  {
    currentProducts.length > 0 && currentProducts.map((el) => {
      const message = `Hi, I'm interested in the following product:${el.image}, ${el.brand}, Price: ${el.price}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/919823111057?text=${encodedMessage}`;

      return (
        <div className='mainChappalInnerViv' key={el.id}> 
          <img src={el.image} alt="" />
          <h4>{`Brand: ${el.brand}`}</h4>
          <p>{`Price: ${el.price}`}</p>  
          <div id='app'>
            <a href={whatsappLink}>
              <img src={whatsApp} alt="" />
            </a>
          </div>
        </div>
      );
    })
  }
</div>

     {
      isloading && <div className="loader">Loading...</div>
    }

    

     {
      <Pagination 
      currentPage={currentPage}
      totalPages={Math.ceil(mensSandal.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
    </div>
  )
}


export default MenSandle