export function useController(newData){
    function deletePost(id){
        const newArray = newData.map((post)=>{
            return post.id !== id ? post : null
        }).filter((post)=> post !== null)
        localStorage.clear()
        localStorage.setItem('posts', JSON.stringify(newArray))
    }
    function editPost(id, dialogStatus, editTitle, editContent){
        dialogStatus.current.style.display = 'flex'
        const post = newData.find((post)=> post.id === id)
        editTitle.current.value = post.title
        editContent.current.value = post.content
    }
    function update(e, editID, dialogRef){
        e.preventDefault()
        const newArray = Array.from(e.target)
        const editPost = newData.map((post)=>{
            if (post.id === editID){
                post.title = newArray[1].value
                post.content = newArray[2].value
            }
            return post
        })
        localStorage.clear()
        localStorage.setItem('posts', JSON.stringify(editPost))
        dialogRef.current.style.display = 'none'
    }
    function closeModal(e, dialogRef){
        e.preventDefault()  
        dialogRef.current.style.display = 'none'
    }
    return {deletePost, editPost, update, closeModal}
}