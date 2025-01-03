import {useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { HomeStyleCSS } from '../css/HomeCSS'


export function Home(){

    const [data, setData] = useState([])
    const storage = JSON.parse(localStorage.getItem('posts'))


    useEffect(()=>{
        setData(storage.toReversed())
    },[])

    return (
        <div className='Home'>
            <HomeStyleCSS>
                <h2>ULTIMOS POSTS</h2>
                {data.length === 0 ? <p>Carregando...</p> : (
                    data.map((post)=> (
                        <div className='posts' key={post.id}>
                                <h2 className="title"> {post.title} </h2>
                                <h4>Autor: {post.author} | {post.date}</h4>
                                <div className="body"> {post.content} </div>
                                <Link to={`/post/${post.id}`} className="more">Ler mais</Link>
                                <div className='categories'>
                                    <h4>Categorias</h4>
                                    {post.categories.map((cat, index)=>(
                                        <span key={index}>
                                            <span>{cat}, </span>
                                        </span> 
                                    ))}
                                </div>
                        </div>
                    ))
                )}
            </HomeStyleCSS>
        </div>
    )
}