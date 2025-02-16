import { Container } from '../css/AppCSS'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useEffect } from 'react'
import { useDataPosts } from '../hook/useData'

function App() {

  function setDataInLocalstorage(){
    const data = useDataPosts()
    localStorage.setItem('posts',JSON.stringify(data))
  }

  useEffect(()=>{
    setDataInLocalstorage()
  })

  return (
    <Container>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </Container>
  )
}

export default App
