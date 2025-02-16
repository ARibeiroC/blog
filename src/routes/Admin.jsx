import { AdminCSS } from "../css/AdminCSS"
import { useEffect, useState, useRef } from "react"
import { useController } from "../hook/useController"

export function Admin(){

    const [callback, setCallback] = useState(1)
    const [newData, setNewData] = useState([])
    const [editID, setEditID] = useState(null)
    const dialogRef = useRef()
    const content = useRef()
    const title = useRef()

    const {deletePost, editPost, update, closeModal} = useController(newData)


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('posts'))
        if (callback === 1){
            setNewData(data)
            setCallback(0)
        }
    },[callback])

    return (
        <AdminCSS>
            <h1>Gerenciar Posts</h1>
            <dialog ref={dialogRef} close="true">
                <form onSubmit={(e)=>{
                    update(e, editID, dialogRef)
                    setCallback(1)
                }} className="form">
                    <button className="close-modal" onClick={(e)=>closeModal(e, dialogRef)}>X</button>
                    <h2>Editar Post</h2>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" ref={title}/>
                    <label htmlFor="content">Conteúdo</label>
                    <textarea id="content" ref={content}></textarea>
                    <button type="submit">Salvar</button>
                </form>
            </dialog>
            {newData.length === 0 ? ( <p>Carregando...</p> ): (
                newData.map((post)=>(
                    <div className="post" key={post.id}>
                        <input type="hidden" name="id" value={post.id}/>
                        <h2>{post.title}</h2>
                        <div className="actions">
                            <button className="btn edit-btn" onClick={()=>{
                                editPost(post.id, dialogRef, title, content)
                                setEditID(post.id)
                                setCallback(1)
                            }}>Editar</button>
                            <button className="btn delete-btn" onClick={()=>{deletePost(post.id)}}>Excluir</button>
                        </div>
                    </div>
                ))
            )}
        </AdminCSS>
    )
}