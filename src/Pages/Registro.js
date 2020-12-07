import React, {Component} from "react";
import Datos from "../Components/Datos";
import Validacion from "../Components/Validacion";

/*Componentes que van dentro de Registro.js 
1-Datos.js
2-Validacion.js

Luego enviar Registro.js a App.js
*/

class Registro extends Component{
    render(){
        return(
            <form>
                <Datos/>
                <br/>
                <Validacion/>
            </form>
        )
    };
}
export default Registro;