import { Link } from "react-router-dom";

function NoFound() {
  return (
    <>
        <div className='text-center'>
          <h1>La pagina no existe</h1>
          <Link className='btn btn-success' to="/" >Regresar a inicio</Link>
        </div>
    </>
  )
}

export default NoFound;