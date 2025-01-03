import '../css/App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useEffect } from 'react'
import { useData } from '../Hook/useData'

function App() {

  function setDataInLocalstorage(){
    const data = useData()
    localStorage.setItem('posts',JSON.stringify(data))
  }

  useEffect(()=>{
    setDataInLocalstorage()
  })

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
