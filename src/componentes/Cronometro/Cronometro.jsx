import React, {useState, useEffect} from "react";

function Cronometro(){
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(false);


    useEffect(()=>{
        let intervalo = null

        if(activo){
            intervalo = setInterval(()=>{
                setSegundos((prev)=>prev+1);
            },1000)
        }else{
           clearInterval(intervalo) 
        }

        return() => clearInterval(intervalo)


    }, [activo])

    const handleReset=()=>{
        setSegundos(0);
        setActivo(false);
    }

    return (
        <div style={{textAlign: 'center', marginTop:'50px'}}>
            <h2>Cronómetro</h2>
            <h1>{segundos}s</h1>

            <button onClick={()=>setActivo(true)}>Iniciar</button>
            <button onClick={()=> setActivo(false)} >Parar</button>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
    )
}

export default Cronometro;