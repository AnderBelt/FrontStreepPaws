import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {
    
    constructor(){
        super();
        this.loginState = false;
      }
    
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    checkLogin(){
        if(this.state.form.username==='master' && this.state.form.password==='123'){
            this.loginState=true;
            console.log({"Usuario Reconocido" : {
                "usuario" : this.state.form.username,
                "password" : this.state.form.password
            }})
            this.render();
        }else{
            console.log('Usuario Incorrecto')
        }
    }

    render() {
        return (
    <div className="containerPrincipal">
        
        {this.loginState ? (<span>

            <h1>Bienvenido {this.state.form.username}</h1>

        </span>) : (<span>
                    
            <h2>Bienvenido a StreetPaws</h2>
        <div className='header-container'>
            <img className='imagen-logo' src='https://lilu.com.mx/wp-content/uploads/2021/09/dog-walking.png' alt="logo-streetpaws"></img>
        </div>
        <div className="containerSecundario">
          <br />
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-success" onClick={()=> this.checkLogin()}>Iniciar Sesión</button>
          </div>
        </div>

        </span>) }

      </div>
        );
    }
}

export default Login;