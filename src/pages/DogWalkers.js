import React, {useEffect, useState, Component} from "react";
import "./dogWalkers.css";
import Cards from "../components/Cards";
import image1 from "../utils/1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

   const prueba = () =>{
      const auth = getAuth();
    //const user = useUser();
    const user = auth.currentUser;
      if(user){
         console.log({Usuario : user.email})
      }else{
         console.log('Usuario no existe')
      }
   }
class DogWalkers extends Component {
    
     render(){
     return (
        
        <div>
         <button onClick={prueba}>Prueba</button>
         <Cards ></Cards>
        
        </div>
     )
}
}

export default DogWalkers;