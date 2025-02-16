export function editPost(id){
    dialogRef.current.style.display = 'flex'
    const post = newData.find((post)=> post.id === id)
    title.current.value = post.title
    content.current.value = post.content
    return {post, title, content}
}