import { BrowserRouter} from 'react-router-dom' 
import Menu from "./Components/Menu/Index"
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb"
import GlobalState from "./Context/GlobalState"

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
        <GlobalState>
            <BrowserRouter>
                <Menu data={opciones}/>
                <RoutesWeb/>
            </BrowserRouter>
        </GlobalState>
    )
}

export default App;    