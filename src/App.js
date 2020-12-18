import { BrowserRouter} from 'react-router-dom' 
import Menu from "./Components/Menu/Index"
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAsfu7FdnBYLptHqJtb1dpL_ZCV2XlAtKk",
    authDomain: "react-utn-lara.firebaseapp.com",
    projectId: "react-utn-lara",
    storageBucket: "react-utn-lara.appspot.com",
    messagingSenderId: "385256768407",
    appId: "1:385256768407:web:c6d707edb033be26007ad2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App(){
    console.log(firebase.database())
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