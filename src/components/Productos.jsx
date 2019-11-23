import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Producto from "./Producto";
import {getProductos_action} from "../redux/actions/productosActions";

const Productos = () => {

  const dispatch = useDispatch();
  const getLibros = () => dispatch(getProductos_action());

  useEffect(() => {
    getLibros();
  }, []);

  const libros = useSelector((state) => state.productos.productos);
  const loading = useSelector((state) => state.productos.loading);

  return (
    <React.Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
        <th scope="col">Nombre:</th>
        <th scope="col">Precio:</th>
        <th scope="col">Acciones</th>
        </thead>
        <tbody>
        {libros.map(l => <Producto producto={l}/>)}
        </tbody>
      </table>
      {loading ? <h2>Loading...</h2> : null}
    </React.Fragment>
  );
};

export default Productos;
