import styled from "styled-components";

export const PostCSS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h2 {
        text-align: center
    }

    .info{
        color: white;
        span {
            cursor: pointer;
        }
        .date {
            color: white;
            font-weight: 100;
            font-size: .8rem;
            cursor: default;
        }
    }
    
    .content {
        p {
            text-align: justify;
            line-height: 2rem;
        } 
    }

    .categories {
        span {
            cursor: pointer;
        }
    }

    @media (max-width: 425px){
        padding: 1rem;

        h2 {
            text-align: start;
        }

        .content {
            border: 1px solid white;
            border-radius: .6rem;
            padding: .4rem;
            box-shadow: 2px 2px 6px -2px var(--color-text);
        }
    }
    @media (max-width: 768px){
        justify-content: center;
        gap: 1rem;

        padding: 1rem;
        
        h2 {
            text-align: start;
        }

        .content {
            border: 1px solid white;
            border-radius: .6rem;
            padding: .4rem;
            box-shadow: 2px 2px 6px -2px var(--color-text);
        }
    }
`