import React, {Dispatch, SetStateAction} from "react";

interface PaginationProps {
    setPage: Dispatch<SetStateAction<number>>;
    page: number;
  }
  

  export default function Pagination({ setPage, page }: PaginationProps) {
  return (
    <div className="paginacion">
      <button className="btn" id="pagina-anterior" onClick={()=>{
        setPage(page > 1 ? page - 1:1)
      }}>
        <i className="fa-solid fa-arrow-left"></i>
        Anterior
      </button>

      <button className="btn" id="pagina-siguiente" onClick={()=>{
        setPage(page + 1)
      }}>
        Siguiente
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
