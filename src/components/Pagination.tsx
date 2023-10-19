import  {Dispatch, SetStateAction} from "react";
import "./Pagination.css";

// Define una interfaz llamada paginationProps, especifica los tipos de propiedades que se esperan en un componente.
interface PaginationProps {
  /* esto nos indica que se espera una propiedad llamada setPage que es una funcion de despacho(Dispatch)
  que toma una accion de cambio de estado y devuelve un numero*/
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
