import { Link } from "react-router-dom"
import { NavbarStyle } from "../css/NavbarCSS"

export function Navbar(){
    return (
        <NavbarStyle>
            <h2>
                <Link to={'/'}>Blog</Link>
            </h2>
            <ul>
                <li>
                    <Link to={'/'}>Página Inicial</Link>
                </li>
                <li>
                    <Link to={'/blog/new-post'} className="new-post">Novo Post</Link>
                </li>
                <li>
                    <Link to={'/blog/admin'} className="new-post">Gerenciar</Link>
                </li>
            </ul>
        </NavbarStyle>
    )
}