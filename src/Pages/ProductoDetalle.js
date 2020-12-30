import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
//import { getProducto } from '../Services/ProductosServices'
import Button from "react-bootstrap/Button"
import firebase from "../Config/firebase";

function ProductoDetalle(props){
    const [producto ,setProducto]=useState({})
    useEffect(
        ()=>{
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                setProducto(doc)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )
    return(
            <>
                <h2>{producto.data().name}</h2>
                <div><b>Nombre del producto: </b>{producto.data().name}.</div>
                <div><b>Descripcion: </b>{producto.data().description}.</div>
                <div><b>Precio al consumidor: </b>${producto.data().price}(Dolares Americanos).</div>
                <Link><Button variant ="primary">Comprar!</Button></Link>
            </>
    )
}
export default ProductoDetalle;