import React from 'react';
import styled from 'styled-components'
import BenefitComponent from './benefit';
// import StyledBenefit from './benefit/benefit.styled';
import {useTranslation} from 'react-i18next';

const StyledThirdSection = styled.section`
  .wrapper{
    flex-direction: column;
    padding: 2rem 0;
  }
`;

const ThirdSection = () => {
    const { t } = useTranslation();
    return <StyledThirdSection>
        <div className="wrapper">
            <BenefitComponent
                icon="lock"
                title={t('benefits.first.title')}
                content={t('benefits.first.content')}
            />
            <BenefitComponent
                icon="squares"
                title={t('benefits.second.title')}
                content={t('benefits.second.content')}
            />
            <BenefitComponent
                icon="mobile"
                title={t('benefits.second.title')}
                content={t('benefits.second.content')}
            />
        </div>

    </StyledThirdSection>;
};

export default ThirdSection;
