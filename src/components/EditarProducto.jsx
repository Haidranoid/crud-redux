import React, {useEffect, useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editarProducto_action, getProducto_action} from "../redux/actions/productosActions";

const EditarProducto = ({match,history}) => {

  const [error, setError] = useState(false);

  const nombreRef = useRef('');
  const precioRef = useRef('');

  const dispatch = useDispatch();
  const producto = useSelector(state => state.productos.producto);
  const getProducto = id => dispatch(getProducto_action(id));
  const editarProducto = producto => dispatch(editarProducto_action(producto));

  const confirmarEditarProducto = e => {
    e.preventDefault();

    // captura valores de los imput
    const nombre = nombreRef.current.value;
    const precio = precioRef.current.value;

    // valida campos vacios
    if (nombre === '' || precio === '') {
      setError(true);
      return;
    }
    setError(false);

    // crea el objeto con los nuevos valores
    const newProducto = {
      id: producto.id,
      nombre,
      precio,
    };

    // edita en la base de datos
    editarProducto(newProducto);

    //redireccion
    history.push('/');

  };
  useEffect(() => {
    getProducto(match.params.id);
  }, [match]);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Editar Producto</h2>
            <form onSubmit={confirmarEditarProducto}>
              <div className="form-group">
                <label>Titulo</label>
                <input
                  name="nombre"
                  type="text"
                  className="form-control"
                  placeholder="Titulo"
                  defaultValue={producto.nombre}
                  ref={nombreRef}
                />
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  name="precio"
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  defaultValue={producto.precio}
                  ref={precioRef}
                />
              </div>

              <button type="submit"
                      className="btn btn-primary
              font-weight-bold text-uppercase d-block w-100">
                Guardar Cambios
              </button>
            </form>
            {error
              ? <div className="font-weight-bold alert alert-danger
               text-enter mt-4">Todos los campos son obligatorios</div>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
