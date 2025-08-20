import React, {useState, useEffect} from "react";
import './EjemploApi.css'

export default function PostApi(){
    const [posts, setPosts]= useState([]) ; // Lista de posts
    const [loading, setLoading] = useState(true) // indicador de carga
    const [error, setError]= useState(null) //Errores
    const [selected, setSelected]= useState(null)// post seleccionado


    //se encarga de obtener los posts al montar el componente
    useEffect(()=>{
        const fetchPosts = async()=>{
            try{
                setLoading(true);
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!res.ok) throw new Error('Error en la petición')
                const data = await res.json();
                setPosts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false)
            }
        }

        fetchPosts();
    },[]) 

    return(
        <div>
            <h2>Lista de Posts</h2>
            {loading && <p>Cargando posts.....</p>}
            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                <ul className="listas">
                    {posts.slice(0,10).map((post)=>(
                       <li 
                        className="lista"
                        key={post.id}
                        onClick={()=>setSelected(post)}
                       >
                        <strong>{post.title}</strong>
                       </li> 
                    ))}
                </ul>
            )}

            {selected && (
                <div>
                    <h3>Detalle del post</h3>
                    <p><strong>ID:</strong> {selected.id}</p>
                    <p><strong>Título:</strong> {selected.title}</p>
                    <p><strong>Contenido:</strong> {selected.body}</p>
                    <button onClick={()=> setSelected(null)}>Cerrar</button>
                </div>
            )}
        </div>
    )

}