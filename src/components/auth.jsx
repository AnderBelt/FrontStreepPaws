import React, {useState} from "react";
import 'firebase/auth';
//import {useFirebaseApp, useUser} from 'reactfire'
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

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
            {
                !user &&
                <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" onChange={ (ev) => setEmail(ev.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" onChange={ (ev) => setPassword(ev.target.value)}/>
                <button onClick={submit}>Crear Usuario</button>
                <button onClick={login}>Iniciar Sesión</button>
                <button onClick={prueba}>Prueba</button>
                <button onClick={logout}>Cerrar Sesión</button>
            </div>}
            {
                user && 
                <div>
                <p>{user.email}</p>    
                <button onClick={logout}>Cerrar Sesión</button>
                <button onClick={prueba}>Prueba</button>
                </div>
            }

        </div>
    )
}