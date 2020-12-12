import { BrowserRouter} from 'react-router-dom' 
import Menu from "./Components/Menu/Index"
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb"

function App(){
    const opciones=[
        {
            path:"/login",
            label:"Login"
            
        },
        {
            path:"/registro",
            label:"Registro"
        },
        {
            path:"/",
            label:"Home"
        },
    ];
    
    return(
        <BrowserRouter>
            <Menu data={opciones}/>
            <RoutesWeb/>
        </BrowserRouter>
    )
}

export default App;    