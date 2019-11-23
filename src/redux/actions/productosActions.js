import axios from 'axios';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "./actions";

export const agregarProducto_action = producto => dispatch =>{
  dispatch(agregarProducto_start());
  dispatch(agregarProducto_error());
};

const agregarProducto_start = () => ({
  type:AGREGAR_PRODUCTO,
});

const agregarProducto_error = () => ({
  type:AGREGAR_PRODUCTO_ERROR,
});

const agregarProducto_exito = producto => ({
  type:AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

