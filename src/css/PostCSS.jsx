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
`