import styled from "styled-components";


export const HomeStyleCSS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 0 .6rem;

    .posts {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem .5rem;
        border: 1px solid #ccc;
        border-radius: .6rem;
        box-shadow: 2px 2px 4px rgba(255,255,255,.3);

        & .body{
            width: 100%;
            overflow: hidden;
            white-space: pre;
            text-overflow: ellipsis;
        }

        & .more {
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-weight: bold;
            width: 100px;
            height: 35px;
            border-radius: .6rem;
            border: none;
            background-color: white;
            transition: .4s;
            color: black;
            
            &:hover{
                background-color: transparent ;
                border: 1px solid white;
                color: white;       
            }
        }

        & .categories{
            & h4 {
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: .2rem;
            }
            & span {
                cursor: pointer;
            }
        }
    }
`
