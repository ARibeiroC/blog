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

`