import React, {useState} from "react";

export default function FormVariosCampos(){

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    })

    const handleChage =(e) =>{
        const {name, value} = e.target // e.target.name ----  e.target.value
        setForm(prev =>({...prev, [name]:value}))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Mensaje enviado")
    }

    const limpiarCampos = ()=>{
        setForm({nombre: "", email:"", mensaje:""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="nombre"
                type="text" 
                value={form.nombre}
                onChange={handleChage}
                placeholder="Nombre"
            />
            <input 
                name="email"
                type="email" 
                value={form.email}
                onChange={handleChage}
                placeholder="Correo"
            />
            <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChage}
                placeholder="Escriba tu mensaje..."
            />
            <button type="submit">Enviar</button>
            <button type="button" onClick={limpiarCampos}>Limpiar</button>
        </form>
    )


}