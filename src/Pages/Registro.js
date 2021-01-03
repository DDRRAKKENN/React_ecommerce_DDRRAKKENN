import React, {useState} from "react";
import {Card, Form, Button, Spinner} from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading";
import FormGroup from "../Components/Forms/FormGroup";

function Registro(){
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
            })
            .then((data)=>{
                    setSpinner(false);
                console.log(data)
                
            })
            .catch((err)=>{
                console.log(err)
                setSpinner(false);
                })
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
            <Card.Title>Registrarse</Card.Title>
            
                <Form onSubmit={handleSubmit}>

                    <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} change={handleChange}/>
                    <FormGroup label="Apellido" type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} change={handleChange}/>
                    <FormGroup label="Email" type="email" placeholder="Ingrese su E-mail" name="email" value={form.email} change={handleChange}/>
                    <FormGroup label="Password" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                    
                    <ButtonWithLoading text="Registrarse" loading={spinner}/>

                </Form>
            </Card.Body>
        </Card>
    )
    
}

export default Registro;