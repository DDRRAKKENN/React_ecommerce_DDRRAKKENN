import React from "react";
import OptionMenu from "./OptionMenu";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Button from "react-bootstrap/Button"
//import Form from 'react-bootstrap/Form';
//import FormControl from "react-bootstrap/Form"; 
import NetContext from "../../Context/NetContext";

function Menu(props){

    return(
        <NetContext.Consumer>
            {
                context=>
                <>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" >Tienda Electronica</Navbar.Brand>
                    <Navbar.Toggle/>
                        <Navbar className="mr-auto">    
                            {
                                context.login &&
                                <>
                                <OptionMenu  opciones={{label:"Inicio", path:"/"}}/>
                                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                </>
                            }
                            {
                                !context.login &&
                                <>
                                <OptionMenu  opciones={{label:"Registro", path:"/registro"}}/>
                                <OptionMenu  opciones={{label:"Login", path:"/login"}}/>
                                </>
                            }
                        </Navbar>
                    </Navbar>

                </>
            }
            

        </NetContext.Consumer>
    )
}
export default Menu;
