import styled from "styled-components";

export const ConfirmPostCSS = styled.div`
    position: fixed;
    top: 1rem;
    width: 18rem;

    .hidden {
        background-color: #ffffbf;
        padding: .4rem;
        border-radius: .6rem;
        visibility: hidden;
        transition: .4s;
    }
        
    .visible {
        background-color: #ffffbf;
        padding: .4rem;
        border-radius: .6rem;
        visibility: visible;
        transition: .4s;
    }

    h4 {
        color: #41fb3a;
        text-align: center;
    }
`