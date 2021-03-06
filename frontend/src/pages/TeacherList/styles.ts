import styled from 'styled-components';

export const PageTeacherList = styled.div`
    width: 100vw;
    height: 100vh;

    @media(min-width: 700px){
        max-width: 100%;
    }

`;

export const FormSearchTeachers = styled.form`
    margin-top: 3.2rem;

    button{
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: .4rem;
        cursor:pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color .2s;
        margin-top: 3.2rem;

        &:hover{
            background: var(--color-secundary-dark);

        }
    }

    @media(min-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        position: absolute;
        bottom: -28px;
    }

`;

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    @media(min-width: 700px){
        padding: 3.2rem 0 ;
        max-width: 740px;
        margin: 0 auto;
    }

`;
