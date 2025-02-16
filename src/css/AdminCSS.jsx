import styled from "styled-components";

export const AdminCSS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .post {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid white;
        padding: 1rem;
        border-radius: .6rem;

        .actions {
            display: flex;
            gap: .6rem;

            .btn {
                text-align: center;
                padding: .4rem;
                border: 1px solid transparent;
                font-weight: bold;
                border-radius: .6rem;
                transition: .4s;
                background-color: white;
                color: #0e1217;
                cursor: pointer;

                &:hover {
                    background-color: #0e1217;
                }
            }

            .edit-btn:hover {
                background-color: aqua;
                color: white;
            }

            .delete-btn:hover {
                background-color: red;
                color: white;
            }
        }
    }



    dialog {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        background-color: rgba(14,18, 23,.9);
        color: white;

        form {
            display: flex;
            flex-direction: column;
            gap: .6rem;

            padding: 1rem;

            width: 50%;

            border: 1px solid #0e1217;
            border-radius: .6rem;

            label {
                color: white;
            }

            .close-modal {
                align-self: flex-end;
                cursor: pointer;
                border: 1px solid white;
                padding: .4rem .6rem;
                border-radius: .6rem;
                transition: .4s;
                background-color: #0e1217;
                color: white;

                &:hover {
                    background-color: white;
                    color: #0e1217;
                }
            }

            input, textarea {
                padding: .6rem;
                border: 1px solid white;
                border-radius: .6rem;
                background-color: #0e1217;
                color: white;
            }

            textarea {
                height: 10rem;
            }
                
            button {
                padding: .4rem;
                border: 1px solid transparent;
                font-weight: bold;
                border-radius: .6rem;
                transition: .4s;
                background-color: white;
                color: #0e1217;
                cursor: pointer;

                &:hover {
                    background-color: green;
                    color: white;
                }
            }
        }
    }

    // RESPONSIVE DESIGN
    @media (max-width: 425px) {
        padding: .4rem;

        dialog {
            form {
                width: 100%;
            }
        }
    } 

`