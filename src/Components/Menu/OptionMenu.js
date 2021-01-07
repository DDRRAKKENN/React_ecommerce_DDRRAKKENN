import React from "react";
import {Link} from "react-router-dom";

function OptionMenu({opciones}){
    return(
    <Link to={opciones.path}><div><li>{opciones.label}</li></div></Link>
    )
}
export default OptionMenu;