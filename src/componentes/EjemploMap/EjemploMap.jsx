import React, {useState} from "react";

export default function EjemploMap(){

    const [filtro, setFiltro] = useState("todos");

    const productos =[
        { id: 1, nombre: "Laptop", precio: 900, stock: true },
        { id: 2, nombre: "Mouse", precio: 20, stock: false },
        { id: 3, nombre: "Teclado", precio: 50, stock: true },
        { id: 4, nombre: "Monitor", precio: 200, stock: true },
    ];

    //Filtramos antes de mapear
    const filtrados = productos.filter(p =>{
        if (filtro === "enStock") return p.stock;
        if (filtro === "sinStock") return !p.stock;
        return true;
    });

    return(
        <div>
            <h2>Lista de los productos</h2>

            <div>
                <button onClick={()=> setFiltro("todos")} >Todos</button>
                <button onClick={()=> setFiltro("enStock")} >En stock</button>
                <button onClick={()=> setFiltro("sinStock")} >Sin stock</button>
            </div>

            <ul>
                {filtrados.map(p =>(
                    <li key={p.id}>
                        {p.nombre} - {p.precio} colones
                        {p.stock ? "Disponible": "Sin stock" }
                    </li>
                ))}
            </ul>

            
        </div>

        
    )

}