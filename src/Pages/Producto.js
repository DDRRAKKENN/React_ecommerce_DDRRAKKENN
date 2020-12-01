import React, { Component } from 'react';

class Producto extends Component{
    render(){
        return(
        <form className="Producto">
            {this.props.data.map(menu=><ul><li>{menu}</li></ul>)}
        </form> 
        )
    }
}

export default Producto;
