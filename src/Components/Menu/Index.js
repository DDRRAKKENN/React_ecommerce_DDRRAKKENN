import React from "react";
import OptionMenu from "./OptionMenu";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/Form"

function Menu(props){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" >Tienda Electronica</Navbar.Brand>
                <Navbar.Toggle/>
                    <Navbar className="mr-auto">
                        <Nav.Link>{props.data.map(opciones=><OptionMenu key={opciones.label} opciones={opciones}/>)}</Nav.Link>
                    </Navbar>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        </>
    )
}
export default Menu;
