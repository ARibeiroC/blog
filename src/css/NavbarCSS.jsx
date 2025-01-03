import styled from "styled-components";

export const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-block: 1rem;
    padding: 0 1rem;


    & a{
        text-decoration: none;
        transition: .4s;
    }
    
    & h2{
        font-size: 2.2rem;

        & a{
            opacity: 1;
        }
    }

    & ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    & .new-post {
        background-color: transparent;
        padding: .4rem;
        border-radius: 1rem;
        border: 1px solid white;

        &:hover{
            background-color: white;
            color: #0e1217;
        }
    }   
`