import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../../style/mensChappal.css"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { mens_Shoes_Get_FailureAction, mens_Shoes_Get_RequestAction, mens_Shoes_Get_SuccessAction } from '../../../Redux/Mens/action'
import Pagination from '../../../Company/Pagination'
import whatsApp from "../../../img/icons8-whatsapp-48.png"


 const MenShoes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const dispatch = useDispatch()
  let { mens_shoes_data, isloading } = useSelector((store)=>{
    return {
      mens_shoes_data : store.mensShoes.mens_shoes_data,
      isloading : store.mensShoes.isloading
    }
  },shallowEqual)

  const getShoes = ()=>{
    dispatch(mens_Shoes_Get_RequestAction())
    axios.get(`https://shop-backend-noq9.onrender.com/mens_shoes`).then((res)=>{
      //console.log(res.data)
      dispatch(mens_Shoes_Get_SuccessAction(res.data))
    }).catch((err)=>{
      dispatch(mens_Shoes_Get_FailureAction())
    })
  }

  useEffect(()=>{
    getShoes()
  },[])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mens_shoes_data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    <div><h1>Shoes</h1></div>

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
      totalPages={Math.ceil(mens_shoes_data.length / productsPerPage)}
      onPageChange={paginate}

      />
     }
    </div>
  )
}

export default MenShoes
