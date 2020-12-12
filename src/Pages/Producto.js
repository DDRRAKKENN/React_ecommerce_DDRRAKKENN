import React, { Component } from 'react';

class Producto extends Component{
    render(){
        return(
        <form className="Producto">
            {this.props.data.map(menu=><li>{menu}</li>)}
        </form> 
        )
    }
}

export default Producto;
