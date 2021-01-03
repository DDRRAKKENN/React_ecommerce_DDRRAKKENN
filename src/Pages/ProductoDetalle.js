import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button"
import firebase from "../Config/firebase" 

function ProductoDetalle(props){
    
    const [producto,setProducto]=useState({})
    
    useEffect(
        ()=>{
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then((doc)=>{
                setProducto(doc.data())
            })
        },
    )

    return (
            <>
            <h2>{producto.name}</h2>
            <div><b>Nombre del producto: </b>{producto.name}.</div>
            <div><b>SKU:</b>{producto.SKU}.</div>
            <div><b>Descripcion: </b>{producto.description}.</div>
            <div><b>Precio al consumidor: </b>${producto.price} (Dolares Americanos).</div>
            <Link><Button variant ="primary">Comprar!</Button></Link>
            <Link><Button variant="primary" >Regresar</Button></Link>
            </>
    )
}
export default ProductoDetalle;