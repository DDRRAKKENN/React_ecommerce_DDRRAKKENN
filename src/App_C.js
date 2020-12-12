import React, { Component } from 'react'
import Producto from "./Pages/Producto"
import Home from "./Pages/Home"
import Registro from './Pages/Registro';

class App extends Component{
  constructor(){
      super();
      this.state={
        titulo:"Tienda de Calzados",
        menu:["Nombre: Nike Superfly","Descripcion: Zapatilla deportiva ","Precio: $4300","SKU: NIKE-SPF-BLK-41","Cantidad disponible: 25"]
      }
  }
  handleClick=()=>{
      this.setState({
        mensajeCompra:"Gracias por su compra"
      })
    //forma de poner un boton en JSX
  }
  render(){
  
    return(
      <>
        <Registro titulo="Datos de usuario"/>
        <Home/>
        <h1>{this.state.titulo}</h1>
        <Producto data={this.state.menu}/>
        <button onClick={this.handleClick}>Comprar</button>
        <p><strong>{this.state.mensajeCompra}</strong></p>
      </>
    )
  }
}

export default App;
