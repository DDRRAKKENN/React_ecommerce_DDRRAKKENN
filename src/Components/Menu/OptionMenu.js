import React from "react";
import {Link} from "react-router-dom";

function OptionMenu({opciones}){
    return(
    <Link to={opciones.path}><li>{opciones.label}</li></Link>
    )
}
export default OptionMenu;