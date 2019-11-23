import React from 'react';

const Producto = ({producto}) => {

    return (
      <tr>
        <th scope="col">Nombre: <code>{producto.nombre}</code></th>
        <th scope="col">Precio: <code>{producto.precio}</code></th>
        <th scope="col">Acciones</th>
      </tr>
    );
};

export default Producto;
