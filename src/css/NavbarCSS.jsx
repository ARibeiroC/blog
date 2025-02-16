import styled from "styled-components";

export const NavbarStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    height: 8vh;

    #menu-label{
        display: none;
        i{
            font-size: 2rem;
        }
        
        input{
            display: none;
        }
    }

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

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        font-size: 1.2rem;
        font-weight: bold;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            .new-post {
                background-color: transparent;
                padding: .4rem;
                border-bottom: 1px solid transparent;
    
                &:hover{
                    border-bottom: 1px solid white;
                    transform: translateY(-2px);
                }
            }
        }
    }
        
    @media (max-width: 768px){

        border-bottom: 1px solid white;

        #menu-label{
            display: inline !important;
        }    
        
        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0rem !important;
            
            position: absolute;

            top: 8%;
            left: -100%;

            background-color:rgba(255, 255, 233, 0.9);

            width: 100vw;
            height: 30%;
            transition: .4s;
            z-index: 1;

            li {
                border-bottom: 1px solid var(--color-background);
                color: var(--color-background);
                flex:1;
            }
        }
    }

`