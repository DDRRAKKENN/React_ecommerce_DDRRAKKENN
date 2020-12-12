import {Route} from 'react-router-dom'
import Home from "../../Pages/Home"
import Registro from "../../Pages/Registro"
import ProductoDetalle from "../../Pages/ProductoDetalle"
import Login from "../../Components/Login"

function RoutesWeb(){
    return(
        <> 
            <Route path="/" exact component={Home}/>
            <Route path="/registro" exact component={Registro}/>
            <Route path="/productos/:id" exact component={ProductoDetalle}/>
            <Route path="/login" exact component={Login}/>
        </>
    )
}
export default RoutesWeb;    