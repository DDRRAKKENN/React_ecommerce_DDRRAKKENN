import React, {Component} from "react";

/*Componentes que van dentro de Registro.js 
1-Datos.js
2-Validacion.js

Luego enviar Registro.js a App.js
*/  

class Datos extends Component{
    render(){
        return(
            <div>
                <label >Nombre <input type="text" placeholder="Ingrese su Nombre" /> </label>
                <br>
                </br>
                <label>Apellidos <input type="text" placeholder="Ingrese su Apellido" /></label>
                <br> 
                </br>
                <label>Email <input type="email"  placeholder="Ingrese correo electronico" /></label>
            </div>
        )
    };
}
export default Datos;