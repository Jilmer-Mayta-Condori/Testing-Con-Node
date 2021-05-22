import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioComponent = props => {

    let history = useHistory();

    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [validadorNombre, setValidadorNombre] = useState('')
    const [validadorNumero, setValidadorNumero] = useState('')

    const ValidadorFormularioContactos = (nombre1, numero1) => {
        if(nombre1 && numero1){
            setValidadorNombre("")
            if(parseInt(numero1)){
                setValidadorNumero("")
                return true
            }else{
                setValidadorNumero("El Numero no puede contener caracteres")
                return false
            }
        }else{
            if (nombre1){
                setValidadorNombre("")
            }else{
                setValidadorNombre("El Nombre no puede estar vacio")
            }
            if (numero1){
                setValidadorNumero("")
            }else{
                setValidadorNumero("El Numero no puede estar vacio")
            }
            return false
        }
        
        
    }

    const onClickSubmit = (event) =>{
        event.preventDefault()
        if (ValidadorFormularioContactos(nombre, numero)){
            let datos ={
                name : nombre,
                number : numero
            }
            axios.post('http://localhost:3000/api/personas', datos)
                .then(res=>{
                setNumero('')
                setNombre('')
                window.alert(`Contacto fue creado exitosamente a la agenda`);
                history.push('/listar')
            }).catch((error)=>{
                console.log("Contacto No CReado");
                console.log(error.toString());
            });
            
        }else{
            console.log("Error en la validacion")
        }

    }

    const onChangeNombre = (event) => {
        const newNombre = event.target.value
        setNombre(newNombre)
    }

    const onChangeNumero = (event) =>{
        const newNumber = event.target.value
        setNumero(newNumber)
    }

    return(   
    <div className="container">
        <div >
        <br></br>
        <form onSubmit={onClickSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre Contacto</label>
                <input type="text" className="form-control" value={nombre} onChange={onChangeNombre} name="name"/>
                <p style={{color: "red"}}>{validadorNombre}</p>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña Contacto</label>
                <input type="text" className="form-control" value={numero} onChange={onChangeNumero} name="number"/>
                <p  style={{color: "red"}}>{validadorNumero}</p>
            </div>
            <button id='form-create-contact-button' type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </div>
    </div>
    );

}

export default FormularioComponent