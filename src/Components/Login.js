import React, {useState,useContext} from "react";
import {useHistory} from "react-router-dom";
import {Card, Form} from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading";
import FormGroup from "../Components/Forms/FormGroup";
import AlertCustom from "../Components/AlertCustom"
import NetContext from "../Context/NetContext";

function Login(){

    const context=useContext(NetContext)
    const [form, setForm] = useState({email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const [alert,setAlert]= useState({variant:"",text:""})
    const history=useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario logueado", data)
            setSpinner(false);
            context.loginUser();
            setAlert({variant:"succes",text:"Bienvendo a la pagina!"})
            history.push("/")
            
        }) 
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
            setAlert({variant:"Error",text:"Ha ocurrido un problema."})
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
                    <FormGroup label="Email" type="email" placeholder="Ingrese su E-mail" name="email" value={form.email} change={handleChange}/>
                    <FormGroup label="Password" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                    <ButtonWithLoading text="Ingresar" loading={spinner}/>
                </Form>

                <AlertCustom variant={alert.variant} text={alert.text}/>

            </Card.Body>
        </Card>
    )
    
}
export default Login;