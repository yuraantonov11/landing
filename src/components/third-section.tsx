import React from 'react';
import styled from 'styled-components'
import BenefitComponent from './benefit';
// import StyledBenefit from './benefit/benefit.styled';
import {useTranslation} from 'react-i18next';

const StyledThirdSection = styled.section`
  .wrapper{
    flex-direction: column;
    padding: 2rem;
  }
`;

const ThirdSection = () => {
    const { t } = useTranslation();
    return <StyledThirdSection>
        <div className="wrapper">
            <BenefitComponent
                title="Daten sind sicher!"
                content={t('-||-')}
            />
            <BenefitComponent
                title="Weitere Applikationen und Dienstleistyngen in Entwicklung"
                content={t('-||-')}
            />
            <BenefitComponent
                title="Einfache Bedienung"
                content="Mit Moneto werden finanzielle Themen einfach und verständlich dargestellt."
            />
        </div>

    </StyledThirdSection>;
};

export default ThirdSection;
