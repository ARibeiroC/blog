import { useDataPosts } from "./useData"
export function useCreatePost(title, content, author, categories){
    const posts = useDataPosts()
    const autoincrement = posts.length + 1
    const currentDate = new Date()
    return {
        id: autoincrement,
        title,
        content,
        author,
        categories,
        date: `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
    }
}