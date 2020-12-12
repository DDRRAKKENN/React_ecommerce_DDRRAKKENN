import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducto } from '../Services/ProductosServices'
import Button from "react-bootstrap/Button"

function ProductoDetalle(props){
    const [producto,setProducto]=useState({})
    useEffect(
        ()=>{
            getProducto(props.match.params.id)
            .then((res)=>{
                setProducto(res[0])
            })    
        },[]
    )
    return(
        <>
            <h2>{producto.name}</h2>
            <div><b>Nombre del producto: </b>{producto.name}</div>
            <div><b>Descripcion: </b>{producto.description}.</div>
            <div><b>Precio al consumidor: </b>${producto.price} (Dolares Americanos).</div>
            <Link><Button variant ="primary">Comprar</Button></Link>
        </>
    )
}
export default ProductoDetalle;



