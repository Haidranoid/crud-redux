import axios from 'axios';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  GET_PRODUCTOS,
  GET_PRODUCTOS_EXITO,
  GET_PRODUCTOS_ERROR
} from "./actions";

const url_db = process.env.REACT_APP_API_DB;


// add producto to db ---------------------------------------
export const agregarProducto_action = producto => dispatch => {
  dispatch(agregarProducto_start());

  axios.post(`${url_db}/libros`, producto)
    .then(response => {
      dispatch(agregarProducto_exito(producto));
    })
    .catch(error => {
      dispatch(agregarProducto_error());
    })
};

const agregarProducto_start = () => ({
  type: AGREGAR_PRODUCTO,
});

const agregarProducto_exito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProducto_error = error => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error,
});

//get products from db ---------------------------------
export const getProductos_action = () => dispatch => {
  dispatch(getProductos_start());
  axios.get(`${url_db}/libros`)
    .then(r => {
      dispatch(getProductos_exito(r.data));
    })
    .catch(e => {
      dispatch(getProductos_error())
    });
};

const getProductos_start = () => {
  return {
    type:GET_PRODUCTOS,
  }
};

const getProductos_exito = productos => {
  return{
    type:GET_PRODUCTOS_EXITO,
    payload: productos,
  }
};

const getProductos_error = () => {
  return{
    type: GET_PRODUCTOS_ERROR
  }
};


