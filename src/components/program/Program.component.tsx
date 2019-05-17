import React from 'react';
import StyledProgram from './program.styled';
import { useTranslation } from "react-i18next";
import { ProgramButton } from '../common/styled';


const Header = (props: any) => {
    const { t } = useTranslation();
    console.log(props);

    return <StyledProgram className={props.className}>
        <span className="time">2 min</span>
        <title>{t('fastRegister')}:</title>
        <p className="content">1412</p>
        <ProgramButton>Los Geht's</ProgramButton>
    </StyledProgram>;
};

export default Header;
