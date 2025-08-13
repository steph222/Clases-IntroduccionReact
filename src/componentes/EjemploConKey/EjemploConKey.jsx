import React, {useState} from "react";

export default function ListaEventosInteractiva() {

    const [eventos, setEventos] = useState([
        {id: "a1", titulo:"Concierto Jazz", activo:true},
        {id: "b2", titulo:"Feria del Libro", activo:false},
        {id: "c3", titulo:"Obra de Teatro", activo:true}
    ]);

    //cambio toggleActivo
    const toggleActivo = (id)=>{
        setEventos(evts =>
            evts.map(e => e.id === id ? {...e, activo: !e.activo} : e)
        );
    }

    //EliminarEvento
    const eliminarEvento =(id)=>{
        setEventos(evts => evts.filter(e => e.id !== id ));
    }

    return (
        <div>
            <h2>Eventos</h2>
            <table border={1}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {eventos.map(e=>(
                    <tr key={e.id}>
                        <td>{e.titulo}</td>
                        <td>{e.activo ? "Activo":"Inactivo"}</td>
                        <td>
                            <button onClick={()=> toggleActivo(e.id)} >Cambiar</button>
                            <button onClick={()=> eliminarEvento(e.id)} >Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )

}