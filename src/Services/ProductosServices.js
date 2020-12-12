import instance from "../Config/Axios"
export function getProductos(){
    return instance.get("items") 
}

export function getProducto(id){
    return fetch ("https://jsonfy.com/items/"+id)
            .then(res=>res.json())
}