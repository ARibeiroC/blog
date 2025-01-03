import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostCSS } from "../css/PostCSS"

export function Post(){
    const postId = useParams()
    const posts = JSON.parse(localStorage.getItem('posts'))
    const [currentPost, setCurrentPost] = useState([])
    
    function getCurrentPost(posts){
        posts.map((post)=>{
            if (post.id === parseInt(postId.id)){
                setCurrentPost(post)
            }
        })
    }


    useEffect(()=>{
        getCurrentPost(posts)
    },[])

    return (
        <PostCSS>
            <h2>{currentPost.title}</h2>
            <div className="info">
                Autor: <span>{currentPost.author}</span> - <span className="date">{currentPost.date}</span>
            </div>
            <div className="content"><p>{currentPost.content}</p></div>
            <div className="categories">
                <h4>Categorias</h4>
                {currentPost.categories && (
                    currentPost.categories.map((cat, index)=>(
                        <span key={index}>
                            <span>{cat}, </span>
                        </span> 
                    ))
                )}
            </div>
        </PostCSS>
    )
}