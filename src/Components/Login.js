import React, {useState} from "react";
import {Card, Form, Button, Spinner} from "react-bootstrap";
import firebase from "../Config/firebase";

function Login(){
    const [form, setForm] = useState({email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario logueado", data)
            
        })
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
        })
        
    }
    const handleChange = (e)=>{

    const target = e.target;
    const value = target.value
    const name = target.name;

    setForm({
        ...form,
        [name] : value});
}
    return(
        <Card style={{ width: '80%', margin:'auto' }}>
            <Card.Body>
            <Card.Title>Login</Card.Title>
            
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange} />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasic">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="coloque su Password" name="password" value={form.password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {
                            spinner && 
                            <Spinner animation="grow" variant="light" size="sm" />
                        }
                        Ingrese
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
    
}
export default Login;