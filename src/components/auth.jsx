import React, {useState} from "react";
import 'firebase/auth';
//import {useFirebaseApp, useUser} from 'reactfire'
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    //const user = useUser();
    const user = auth.currentUser;

    const submit = async () => {
        await createUserWithEmailAndPassword(auth,email,password);
    }
    
    const login = async () => {
        await signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Sesión Iniciada")
            setEmail('')
            console.log(email)
            // ...
          })
          .catch((error) => {
            const errorCode = 'error.code';
            const errorMessage = 'error.message';
          });;
        //console.log({Usuario: user.email})
    }


    const logout = async () =>{
        let mail = user.email;
        
        await signOut(auth).then(() => {
            console.log("Sesión cerrada")
            setEmail('')
            setEmail(mail)
          }).catch((error) => {
            // An error happened.
          });
        //console.log({Usuariodespues : user.email})
        
    }

    const prueba = () =>{
        if(user){
            console.log({Usuario : user.email})
        }else{
            console.log('Usuario no existe')
        }
    }



    return(
        <div>
        <div className="containerPrincipal">  {
                !user &&
                <div>
                <h2>Bienvenido a StreetPaws</h2>
                <div className='header-container'>
                <img className='imagen-logo' src='https://lilu.com.mx/wp-content/uploads/2021/09/dog-walking.png' alt="logo-streetpaws"></img>
                </div>
                <div className="containerSecundario">
                    <br/>
                <label htmlFor="email">Correo Electrónico</label>
                <br/>
                <input type="email" id="email" onChange={ (ev) => setEmail(ev.target.value)}/>
                <br/>
                <label htmlFor="password">Contraseña</label>
                <br/>
                <input type="password" id="password" onChange={ (ev) => setPassword(ev.target.value)}/>
                <br/>
                <br/>
                <button className="btn btn-success" onClick={login}>Iniciar Sesión</button>
                <br/>
                <br/>
                <button className="btn btn-success" onClick={logout}>Cerrar Sesión</button>
                <button onClick={prueba}>Prueba</button>
                </div>
            </div>}
            {
                user && 
                <div>
                <p>{user.email}</p>    
                <button onClick={logout}>Cerrar Sesión</button>
                <button onClick={prueba}>Prueba</button>
                <button onClick={prueba}>Prueba</button>
                <Link to="/dogwalker">
                    <button>Contratar</button>
                </Link>
                </div>
            }

        </div>
        </div>  
    )
}