

export default function Contentpro() {
  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Crear Producto</h1>
            <a href="listado-pro.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i className="fas fa-list fa-sm text-white-50"></i> Listado
            </a>
        </div>
        <div className="row">
            <div className="col-6">
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <select id="productos-select" className="form-select form-control">
                            <option selected>Seleccionar un producto</option>
                            <option value="Hamburguesa">Hamburguesa</option>
                            <option value="Picada">Picada</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Perro">Perro</option>
                            <option value="Sanchipapa">Sanchipapa</option>
                            <option value="Chuzo">Chuzo</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Pollo">Pollo</option>
                            <option value="Tacos">Tacos</option>
                            <option value="Burrito">Burrito</option>
                        </select>
                        <label className="form-label" htmlFor="form6Example3">Producto</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="number" id="precio-pro" className="form-control" />
                        <label className="form-label" htmlFor="form6Example5">Precio</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="number" id="stock-pro" className="form-control" />
                        <label className="form-label" htmlFor="form6Example6">Stock</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <textarea className="form-control" id="des-pro" rows="4"></textarea>
                        <label className="form-label">Descripcion</label>
                    </div>
                    <button data-mdb-ripple-init type="button" className="btn-create btn btn-primary btn-block mb-4">Crear Producto</button>
                    <button data-mdb-ripple-init type="button" className="d-none btn-update btn btn-success btn-block mb-4">Actualizar Producto</button>
                </form>
            </div>
            <div className="col-5">
                <img id="imagen-pro" src="https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg" className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
