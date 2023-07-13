import React from "react";
import '../style/mensChappal.css'

const  Pagination = ({ currentPage, totalPages, onPageChange }) => {

  // const getPageButtons = () => {
  //   let buttons = [];
  //   if (totalPages <= 3) {
  //     buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
  //   } else {
  //     if (currentPage < 3) {
  //       buttons = [1, 2,  totalPages];
  //     } else if (currentPage >= totalPages - 2) {
  //       buttons = [1,  totalPages - 2, totalPages - 1, totalPages];
  //     } else {
  //       buttons = [
  //         1,
  //         currentPage - 1,
  //         currentPage,
  //         currentPage + 1,
  //         totalPages,
  //       ];
  //     }
  //   }
  //  return buttons;
   
  // };

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