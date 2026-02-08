import React, {useState} from "react";
import '../hoja_de_estilo/TareaFormulario.css';
import { v4 as uuidv4 } from "uuid";


function TareaFormulario(props){
    const[input, Setinput] = useState('');
    const ManejarCambio = e =>{
        Setinput(e.target.value)
    }
    const ManejarEnvio = e =>{
        e.preventDefault();

        const TareaNueva ={
            id: uuidv4(),
            texto:input,
            completada: false,
        } 
        props.onSubmit(TareaNueva);
    }
    return(
        <form className="tarea-formulario" onSubmit={ManejarEnvio}>

            <input type="text" 
            className="tarea-input" 
            placeholder="escribe una tarea" 
            name="texto"
            onChange={ManejarCambio}/>
            <button className="tarea-btn">Agrega Tarea</button>



        </form>
    )

}


export default TareaFormulario;