import styled from 'styled-components';

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background: var(--color-primary);

  
`;

export const PageLandingContent = styled.div`

@media(min-width: 1100px){
        max-width: 1100px;
        display: grid;

        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr; 
        grid-template-areas: 
        "logo hero hero "
        "buttons buttons total"
    } 

`;

export const LogoContainer = styled.div`

grid-area: logo;

text-align: center;
/* margin-bottom: 3.2rem; */
align-self: center;
margin-top: 3rem;

    img{
        height: 10rem;
    }

    h2{
        font-weight: 500;
        line-height:4.6rem;
        margin-top: .8rem;
       

    }
    @media(min-width: 1100px){
        text-align: initial;
        font-size: 3.6rem;
    }
      
`;

export const HeroImage = styled.img`
    width: 100%;
    grid-area: hero;
    @media(min-width: 1100px){
        align-self: end;
        
    }
    

`;

export const ButtonsContainer = styled.div`
    grid-area: buttons;

    display: flex;
    margin: 3.2rem 0;

    a {
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;
        font: 700 2rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color .3s;

        text-decoration: none;
        color: var(--color-button-text);
        background: var(--color-secundary);

        &:hover{
            background: var(--color-secundary-dark);

        }

        & + a{
            margin-left: 1.6rem;

        }

        img{
            width: 4rem;
            margin-right: 2.3rem;
        }

        &:first-child{
            background: var(--color-primary-lighter);

            &:hover{
                background: var(--color-primary-light);

            }
        }
        
    }
`;

export const TotalConections = styled.span`
grid-area: total;

    font-size: 1.8rem;
    display: flex;
    align-items: center;

    img{
        margin-left: 0.8rem;
    }

`;