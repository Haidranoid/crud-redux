import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NuevoProducto from "./NuevoProducto";
import EditarProducto from "./EditarProducto";
import Productos from "./Productos";
import Header from "./Header";

function App() {

  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/productos/nuevo" component={NuevoProducto}/>
          <Route       path="/productos/editar/:id" component={EditarProducto}/>
          <Route exact path="/" component={Productos}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
