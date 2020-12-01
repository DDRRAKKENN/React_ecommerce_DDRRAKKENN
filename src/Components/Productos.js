function Productos(props){
    return(
        <div>
            <div><b>Producto:</b> {props.productos.name}</div>
            <div><b>Descripcion:</b> {props.productos.description}</div>
            <div><b>Precio:</b> ${props.productos.price} (Dolares Americanos.)</div>
            <button>Ver Detalle</button>
            <p></p>
        </div>
    );
}
    
        
export default Productos;