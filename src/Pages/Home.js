import React, { Component } from "react";
import Productos from "../Components/Productos";
//import {getProductos} from "../Services/ProductosServices";
import firebase from "../Config/firebase";

class Home extends Component {
    constructor() {
        super();
        this.state = {
        productos: [],
        loading: true,
    };
}
    componentDidMount() {
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false,
            })
    })
}
    render() {
        if(this.state.loading){
            return(
                <div>
                    Keep calm and wait...
                </div>
            )}
        else{
            return(
                <div>
                    <h2>Lista de Productos disponibles</h2>
                    {this.state.productos.map(producto=><Productos key={producto.id} productos={producto}/>)}
                </div>
            )
        }
    }
}
export default Home;
