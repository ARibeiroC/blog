import { useState, useEffect } from "react"

export function useGetPosts(){

    const [data, setData] = useState([])
    const storage = JSON.parse(localStorage.getItem('posts'))

    function getPosts(){
        try {
            setData(storage)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPosts()
    },[])

    return {data}
}