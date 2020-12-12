function Login(){
    return(
            <>
                <h2>Login</h2>
                <label>Email <input type="email"  placeholder="Correo electronico" /></label>
                <br></br>
                <label >Constraseña <input type="password" placeholder="Password" /> </label>
                <br></br>
                <button onClick="submit">Confirmar</button>
            </>
    )
}
export default Login;