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

    @media(min-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
