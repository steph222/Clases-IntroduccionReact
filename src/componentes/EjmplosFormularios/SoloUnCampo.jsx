import React, {useState} from "react";

export default function FormSimple(){
    const [nombre, setNombre] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault(); //Evita que se recargue la pagina 
        alert(`Hola ${nombre}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input 
                    type="text"
                    value={nombre} //valor viene del estado
                    //<input type='text' value='stephanie' name="nombre" id='nombre' />
                    //e.target.name ----- nombre
                    //e.target.type ---- text
                    //e.target.value --- stephanie
                    onChange={(e) => setNombre(e.target.value)} //actualizacion estado
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}