// import React from "react";
// import '../style/mensChappal.css'

// const  Pagination = ({ currentPage, totalPages, onPageChange }) => {

  
//   const prevPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div>  
//     <div className="mainButton">
//       <button className="button-5" onClick={prevPage} disabled={currentPage === 1}>
//         {"<"}
//       </button>

//       <button className="button-5">{currentPage }</button>
     
//       <button className="button-5" onClick={nextPage} disabled={currentPage === totalPages}>
//         {">"}
//       </button>
//     </div>

//     <div className="pages"><h3>Total Pages : {totalPages}</h3></div>
//     </div>
//   );
// };

// export default  Pagination; 

































// import React from "react";
// import '../style/mensChappal.css'

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//     const prevPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };
//   return (
//     <div>  
//       <div className="mainButton">
//         <button className="button-5" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
//           {"<<"}
//         </button>

//         <button className="button-5" onClick={prevPage} disabled={currentPage === 1}>
//           {"<"}
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             className={`button-5 ${currentPage === number ? 'active' : ''}`}
//             onClick={() => onPageChange(number)}
//           >
//             {number}
//           </button>
//         ))}

//         <button className="button-5" onClick={nextPage} disabled={currentPage === totalPages}>
//           {">"}
//         </button>

//         <button className="button-5" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
//           {">>"}
//         </button>
//       </div>

//       <div className="pages"><h3>Total Pages : {totalPages}</h3></div>
//     </div>
//   );
// };

// export default Pagination;










import React from "react";
import '../style/mensChappal.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const pageLimit = 3;
  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  let endPage = Math.min(totalPages, startPage + pageLimit - 1);

  if (totalPages - endPage < Math.floor(pageLimit / 2)) {
    startPage = Math.max(1, endPage - pageLimit + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

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
        <button className="button-5" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          {"<<"}
        </button>

        <button className="button-5" onClick={prevPage} disabled={currentPage === 1}>
          {"<"}
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`button-5 ${currentPage === number ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}

        <button className="button-5" onClick={nextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>

        <button className="button-5" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
          {">>"}
        </button>
      </div>

      <div className="pages"><h3>Total Pages : {totalPages}</h3></div>
    </div>
  );
};

export default Pagination;






