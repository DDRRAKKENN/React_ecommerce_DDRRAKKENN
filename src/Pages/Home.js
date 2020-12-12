import React, { Component } from "react";
import Productos from "../Components/Productos";
import {getProductos} from "../Services/ProductosServices"

class Home extends Component {
    constructor() {
        super();
        this.state = {
        productos: [],
        loading: true,
    };
}
    componentDidMount() {
        getProductos()
        .then(data=>{
            this.setState({
                productos:data.data,
                loading:false
            })
        })
}
    render() {
        if(this.state.loading){
            return(
                <div>
                    loading...
                </div>
            )}
        else{
            return(
                <div>
                    <h2>Lista de Productos disponibles</h2>
                    {this.state.productos.map(producto=><Productos productos={producto}/>)}
                </div>
            )
                
        }
    }
}
export default Home;
