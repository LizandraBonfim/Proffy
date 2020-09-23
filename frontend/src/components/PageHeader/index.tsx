import React from 'react';

import {
    PageHeaderContent,
    TopBarContainer,
    HeaderContent,
    Logo
} from './styles';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (

        <PageHeaderContent >
            <TopBarContainer>
                <Link to="/">
                    <img src={backIcon} alt="Back " />
                </Link>

                <Logo src={logoImg} alt="Proffy" />

            </TopBarContainer>
            <HeaderContent>
                <strong>{props.title}</strong>
                {props.children}
            </HeaderContent>

        </PageHeaderContent>

    )
}

export default PageHeader
