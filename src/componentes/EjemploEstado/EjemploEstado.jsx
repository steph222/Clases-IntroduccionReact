import React, {useState} from "react";

function Contador(){

    const [contador, setContador] = useState(0);

    const incrementar=()=>{
        setContador(contador+1);
    }

    const decrementar =()=>{
        setContador(contador-1);
    }

    const reiniciar=()=>{
        setContador(0);
    }


    return (
        <div>
            <h2>Contador</h2>
            <p>{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    )
}

export default Contador;