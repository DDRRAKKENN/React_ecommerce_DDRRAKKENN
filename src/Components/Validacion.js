import React, {Component} from "react";

/*Componentes que van dentro de Registro.js 
1-Datos.js
2-Validacion.js

Luego enviar Registro.js a App.js
*/

class Validacion extends Component{
    render(){
        return(
            <div>
                <label >Constraseña <input type="password" /> </label>
                <br></br>
                <label >Repita constraseña <input type="password" /> </label>
                <br></br>
                <button onClick="submit">Confirmar</button>
            </div>
        )
    };
}
export default Validacion;