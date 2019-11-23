import React from 'react';

const Producto = ({producto}) => {

    return (
      <tr>
        <td scope="col">Nombre: <code>{producto.nombre}</code></td>
        <td scope="col">Precio: <code>{producto.precio}</code></td>
        <td scope="col">Acciones</td>
      </tr>
    );
};

export default Producto;
