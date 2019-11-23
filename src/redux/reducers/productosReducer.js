import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../actions/actions";

const initialState = {
  productos: [],
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

    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        productos: [...state.productos, action.payload]
      };


    default:
      return state;
  }
};

export default productosReducer;
