import { useGetPosts } from "../hook/useGetPosts"
import { Link } from "react-router-dom"
import { AdminCSS } from "../css/AdminCSS"
import { useEffect, useState } from "react"

export function Admin(){

    const [callback, setCallback] = useState(1)
    const [newData, setNewData] = useState([])

    function deletePost(id){
        const newArray = newData.map((post)=>{
            if(post.id !== id){
                console.log(post)
            }
        })

        localStorage.clear()
        localStorage.setItem('posts', JSON.stringify(newArray))
        setCallback(1)
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('posts'))
        if (callback === 1){
            setNewData(data)
            console.log(data)
        }
    },[callback])

    return (
        <AdminCSS>
            <h1>Gerenciar Posts</h1>
            {newData.length === 0 ? ( <p>Carregando...</p> ): (
                newData.map((post)=>(
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="actions">
                            <Link className="btn edit-btn">Editar</Link>
                            <button className="btn delete-btn" onClick={()=>{deletePost(post.id)}}>Excluir</button>
                        </div>
                    </div>
                ))
            )}
        </AdminCSS>
    )
}