import React, { Component } from "react";
import Productos from "./Productos";

class Home extends Component {
    constructor() {
        super();
        this.state = {
        productos: [],
        loading: true,
    };
}
    componentDidMount() {
        fetch("https://jsonfy.com/items")
        .then(res => res.json())
        .then((data)=>{
            this.setState({
                productos:data,
                loading:false
            })
        })
}
    render() {
        if(this.state.loading){
            return(
                <div>
                    loading....
                </div>
            )}
        else{
            return(
                <div>
                    <p><u><strong>Lista de Productos disponibles</strong></u></p>
                    {this.state.productos.map(producto=><Productos productos={producto}/>)}
                </div>
            )
                
        }
    }
}
export default Home;
