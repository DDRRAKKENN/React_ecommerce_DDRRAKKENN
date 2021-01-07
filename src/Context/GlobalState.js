import React,{Component} from 'react';

import NetContext from "./NetContext";

class GlobalState extends Component{
    state={
        login:localStorage.getItem("login")

    }
    loginUser= ()=>{
        this.setState({
            login:true
        })
        localStorage.setItem("login",true)
    }
    logoutUser=()=>{
        this.setState({
            login:false
        })
        localStorage.removeItem("login")
    }
    render(){
        return(
            <NetContext.Provider
                value={{
                    login:this.state.login,
                    loginUser: this.loginUser,
                    logoutUser:this.logoutUser,
                }}
            >
                {this.props.children}
            </NetContext.Provider>
        )
    }
}

export default GlobalState;