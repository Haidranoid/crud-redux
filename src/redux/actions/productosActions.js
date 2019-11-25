import axios from 'axios';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  GET_PRODUCTOS,
  GET_PRODUCTOS_EXITO,
  GET_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  GET_PRODUCTO,
  GET_PRODUCTO_EXITO,
  GET_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from "./actions";

const url_db = process.env.REACT_APP_API_DB;


// ------------------- add producto to db ----------------------------------
export const agregarProducto_action = producto => dispatch => {
  dispatch(agregarProducto_start());

  axios.post(`${url_db}/libros`, producto)
    .then(response => {
      dispatch(agregarProducto_exito(producto));
      dispatch(getProductos_action());
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

// ------------------- get products from db ---------------------------------
export const getProductos_action = () => dispatch => {
  dispatch(getProductos_start());
  axios.get(`${url_db}/libros`)
    .then(r => {
      dispatch(getProductos_exito(r.data));
    })
    .catch(e => {
      dispatch(getProductos_error());
    });
};

const getProductos_start = () => {
  return {
    type: GET_PRODUCTOS,
  }
};

const getProductos_exito = productos => {
  return {
    type: GET_PRODUCTOS_EXITO,
    payload: productos,
  }
};

const getProductos_error = () => {
  return {
    type: GET_PRODUCTOS_ERROR
  }
};

// ------------------- eliminar products from db -----------------------------
export const deleteProducto_action = id => dispatch => {
  dispatch(deleteProducto_start());
  axios.delete(`${url_db}/libros/${id}`)
    .then(r => {
      dispatch(deleteProducto_exito(id));
    })
    .catch(e => {
      dispatch(deleteProducto_error());
    })
};

const deleteProducto_start = () => ({
  type: ELIMINAR_PRODUCTO,
});

const deleteProducto_exito = id_deleted => ({
  type: ELIMINAR_PRODUCTO_EXITO,
  payload: id_deleted,
});

const deleteProducto_error = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
});

// ------------------- eliminar products from db ----------------------------
export const getProducto_action = id => dispatch => {
  dispatch(getProducto_start());
  axios.get(`${url_db}/libros/${id}`)
    .then(response => {
      dispatch(getProducto_exito(response.data));
    })
    .catch(error => {
      dispatch(getProducto_error());
    });
};

const getProducto_start = () => {
  return {
    type: GET_PRODUCTO,
  }
};

const getProducto_exito = producto => {
  return {
    type: GET_PRODUCTO_EXITO,
    payload: producto
  }
};

const getProducto_error = () => {
  return {
    type: GET_PRODUCTO_ERROR,
  }
};
// ------------------- editar products from db ----------------------------
export const editarProducto_action = producto => dispatch => {
  dispatch(editarProducto_start());
  axios.put(`${url_db}/libros/${producto.id}`,producto)
    .then(response => {
      dispatch(editarProducto_exito(response.data));
    })
    .catch(error => {
      dispatch(editarProducto_error());
    });
};

const editarProducto_start = () => {
  return {
    type: EDITAR_PRODUCTO,
  }
};

const editarProducto_exito = producto => {
  return {
    type: EDITAR_PRODUCTO_EXITO,
    payload: producto
  }
};

const editarProducto_error = () => {
  return {
    type: EDITAR_PRODUCTO_ERROR,
  }
};
