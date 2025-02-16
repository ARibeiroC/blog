import { Link } from "react-router-dom"
import { NavbarStyle } from "../css/NavbarCSS"
import {MenuResponsive} from "../hook/useMenuResponsive"
import { useEffect, useRef } from "react"

export function Navbar(){
    const statusCheckbox = useRef()
    const menu = useRef()
    
    let menuToggle;
    
    

    useEffect(()=>{
        menuToggle = new MenuResponsive(statusCheckbox, menu)
    }, menuToggle)  

    return (
        <NavbarStyle>
            <label htmlFor="menu" id="menu-label">
                <input type="checkbox" id="menu" onClick={(e)=>{
                    if (!statusCheckbox.current.checked){
                        menuToggle.hideMenu()
                    }else{
                        menuToggle.showMenu()
                    }
            }} ref={statusCheckbox}/>
                <i className="fa-solid fa-bars"></i>
            </label>
            <h2>
                <Link to={'/'}>Blog</Link>
            </h2>
            <ul ref={menu}>
                <li>
                    <Link to={'/'} className="new-post" onClick={()=>{
                        statusCheckbox.current.checked = false
                        menuToggle.hideMenu()
                    }}>Página Inicial</Link>
                </li>
                <li>
                    <Link to={'/blog/new-post'} className="new-post" onClick={()=>{
                        statusCheckbox.current.checked = false
                        menuToggle.hideMenu()
                    }}>Novo Post</Link>
                </li>
                <li>
                    <Link to={'/blog/admin'} className="new-post" onClick={()=>{
                        statusCheckbox.current.checked = false
                        menuToggle.hideMenu()
                    }}>Gerenciar</Link>
                </li>
            </ul>
        </NavbarStyle>
    )
}