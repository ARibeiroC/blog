import styled from "styled-components";

export const NewPostCSS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .4rem;

    h2 {
        margin-inline: 20%;
        align-self: flex-start;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 94%;
        max-width: 60%;

        padding: 1rem;
        border: 1px solid white;
        border-radius: .6rem;

        & .input-fields {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            flex: 1;

            & .form-control{
                display: flex;
                flex-direction: column;
                
                label {
                    font-weight: bold;
                    font-size: 1.2rem;
                    margin-bottom: .2rem;
                }

                input {
                    height: 30px;
                    padding: .4rem;
                    border-radius: .4rem;
                    outline: none;
                    border: 2px solid transparent;
                }

                #content {
                    height: 150px;
                    resize: none;
                    outline: none;
                    padding: .4rem;
                    // border: 1px solid;
                    // line-height: 200%;

                    // &:hover {
                    //     border-color: 1px solid aqua;
                    // }
                }
            }
        }

        & .checkbox-items {
            
            & fieldset {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;

                border-radius: .4rem;
                padding: .4rem 1rem;


                legend {
                    padding-inline: .4rem;
                }

                .item-check {
                    margin-bottom: .4rem;
                    grind-column: 1/3;
                    grind-row: 1/4;
                }
            }
        }
    }

    button {
        align-self: flex-end;
        margin-inline: 3%;
        width: 5.5rem;
        border: 1px solid white;
        border-radius: .2rem;
        background-color: transparent;
        color: white;
        font-size: 1rem;
        height: 1.8rem;
        transition: .4s;

        &:hover {
            background-color: white;
            color: #0e1217;
            font-weight: bold;
        }
    }
    
`

