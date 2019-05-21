import React from 'react';
import StyledProgram from './program.styled';
import { useTranslation } from "react-i18next";
import {Icon, ProgramButton} from '../common/styled';

type Props = {
    className?: string;
    second?: boolean;
}
const ProgramComponent = (props: Props) => {
    const { t } = useTranslation();
    const programType = props.second ? 'second' : 'first';
    console.log(programType);

    return <StyledProgram className={props.className}>
        <Icon className="clock">{t(`programs.${programType}.time`)}</Icon>
        <title>{t(`programs.${programType}.title`)}:</title>
        <p className="content">{t(`programs.${programType}.content`)}</p>
        <ProgramButton>{t(`programs.${programType}.button`)}</ProgramButton>
    </StyledProgram>;
};

export default ProgramComponent;
