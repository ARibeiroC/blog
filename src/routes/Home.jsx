import { Link } from 'react-router-dom'

// STYLED COMPONENTS IMPORT
import { HomeStyleCSS } from '../css/HomeCSS'

import { useGetPosts } from '../hook/useGetPosts'

export function Home(){
    const {data} = useGetPosts()
    const sortdata = data.toReversed()

    return (
        <div className='Home'>
            <HomeStyleCSS>
                <h2>ULTIMOS POSTS</h2> 
                {sortdata.length === 0 ? <p>Carregando...</p> : (
                    sortdata.map((post)=> (
                        <div className='posts' key={post.id}>
                                <input type="hidden" name="id" className='id' value={post.id}/>
                                <h2 className="title"> {post.title} </h2>
                                <h4>Autor: {post.author} | {post.date}</h4>
                                <div className="body"> {post.content} </div>
                                <Link to={`/blog/post/${post.id}`} className="more">Ler mais</Link>
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