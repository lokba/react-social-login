import styled from "styled-components";

export const LoginWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    border:1px solid black;

    width:400px;
    padding:40px 0;

    display: flex;
    flex-direction: column;;
    align-items: center;

    h2{
        font-weight:600;
        font-size:24px;
        padding-bottom:10px;
    }

    ul{
        li{
            border:1px solid black;
            border-radius:10px;
            text-align:center;
            margin-top:20px;

            button{
                cursor:pointer;
                padding:12px;
                font-size:16px;
            }

            &:hover{
                background:rgba(0,0,0,0.1);
            }
        }
    }
`
