import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'


function Productos(props){
    return(
        <div>
            <Card style={{ width: '15rem' }} border="primary" bg="light">
                <Card.Body>
                    <Card.Title><b>{props.productos.data().name}</b></Card.Title>
                    <Link to={"productos/"+props.productos.id}><Button variant ="outline-primary">Ver Detalle</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Productos; 