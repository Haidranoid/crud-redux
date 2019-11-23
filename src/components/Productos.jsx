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

  return (
    <React.Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
        {libros.map(l => <Producto producto={l}/>)}
        </thead>
        <tbody>

        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Productos;
