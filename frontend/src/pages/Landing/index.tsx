import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import {
    PageLanding,
    LogoContainer,
    HeroImage,
    ButtonsContainer,
    PageLandingContent,
    TotalConections
} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Landing() {


    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const total = response.data.total;

            setTotalConnections(total);
        })
    });

    return (
        <PageLanding id="page-landing">
            <PageLandingContent id="page-landing-content" className="container" >
                <LogoContainer >
                    <img src={logo} alt="Logo Proffy" />
                    <h2>Sua plataforma online.</h2>
                </LogoContainer>

                <HeroImage src={landingImg} alt="Plataforma online" />


                <ButtonsContainer>
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Estudar" />
                        Dar Aulas
                    </Link>
                </ButtonsContainer>

                <TotalConections>
                    Total de {totalConnections} conexões
                    <img src={purpleHeart} alt="Conexoes" />
                </TotalConections>

            </PageLandingContent>
        </PageLanding>
    )
}

export default Landing
