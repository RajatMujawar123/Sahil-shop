import React from "react";
import '../style/mensChappal.css'

const  Pagination = ({ currentPage, totalPages, onPageChange }) => {

  
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div>  
    <div className="mainButton">
      <button className="button-5" onClick={prevPage} disabled={currentPage === 1}>
        {"<"}
      </button>

      <button className="button-5">{currentPage }</button>
     
      <button className="button-5" onClick={nextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
    <div><h3>Total Pages : {totalPages}</h3></div>
    </div>
  );
};

export default  Pagination; 