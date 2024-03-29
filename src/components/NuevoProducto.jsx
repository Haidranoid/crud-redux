import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {agregarProducto_action} from "../redux/actions/productosActions";

const NuevoProducto = ({history}) => {

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const agregarProducto = producto => dispatch(agregarProducto_action(producto));


  const handleSubmit = e => {
    e.preventDefault();
    //validar formulario
    if (nombre === '' || precio === '') {
      setError(true);
      return;
    }
    setError(false);

    agregarProducto({nombre, precio});
    history.push("/");

  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Libro"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Libro"
                  value={precio}
                  onChange={e => setPrecio(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar
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

export default NuevoProducto;
