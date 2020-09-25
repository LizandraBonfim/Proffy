import styled from 'styled-components';

export const PageTeacherForm = styled.div`
     width: 100vw;
    height: 100vh;
`;

export const Main = styled.form`
    background: var(--color-box-base);
    margin-top: -4rem;
    width: 100%;
    border-radius: .5rem;
    padding-top: 3rem;

    label{
        color: var(--color-text-complement);
    }

    fieldset{
        border: 0;
        padding: 0 2.4rem; 

        & + fieldset{
            margin-top: 6.4rem;
        }
    }

    legend{
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            background: none;
            border: none;
            cursor: pointer;
            font: 700 1.6rem Archivo;
            color: var(--color-primary);

            &:hover{
                color: var(--color-primary-dark);
            }
        }
        
    }

    @media(min-width: 700px){
        max-width: 74rem;
        margin: -8.2rem  auto 3.2rem;
        overflow: hidden;

        legend{
            border-bottom: 1px solid var(--color-line-in-white);
            width: 100%;
            padding-bottom: 1.6rem;
            border-bottom: 1px solid var(--color-line-in-white)

        }
    }

`;

export const Footer = styled.footer`
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);

    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        img{
            margin-right: 2rem;
        }
    } 

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
        max-width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            justify-content: space-between;

        }

        button{
            width: 20rem;
            margin-top: 0;
        }
    }
`;

export const ScheduleItem = styled.div`

@media(min-width: 700px){
    display: flex;
    justify-content: space-between;
}
`;