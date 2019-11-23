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
} from "../actions/actions";

const initialState = {
  productos: [],
  producto: {},
  error: false,
  loading: false,
};

const productosReducer = (state = initialState, action) => {

  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        productos: [...state.productos, action.payload]
      };

    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_PRODUCTOS:
      return {
        ...state,
        error: false,
        loading: true,
        producto: {},
      };

    case GET_PRODUCTOS_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        productos: [...action.payload],
      };

    case GET_PRODUCTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        productos: state.productos.filter(p => p.id !== action.payload)
      };

    case ELIMINAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_PRODUCTO:
      return {
        ...state,
        error: false,
        loading: true,
        producto: {},
      };

    case GET_PRODUCTO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        producto: action.payload
      };

    case GET_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case EDITAR_PRODUCTO:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        error: false,
        loading: true,
        productos: state.productos.map(
          p => p.id === action.payload.id ? action.payload : p)
      };

    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default productosReducer;
