import React from 'react';
import styled from 'styled-components'
import colors from '../components/common/colors';
import bg from '../images/bg01.png';
import img from '../images/moneto-full.svg';
import {useTranslation} from 'react-i18next';

const StyledFirstSection = styled.section`
    display: grid;
    width: 100%;
    background-image: url(${bg});
    color: ${colors.white1};

    //grid-template-columns: repeat(4, 1fr);

    //flex-direction: row;
    //justify-content: center;
    //grid-template-columns: auto auto;
    //grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: flex-start;
    .text-wrap{
      margin: 0 2rem;
      color: ${colors.white0};
    }
    .button{
    width: 50px;
    height: 50px;
    background-color: red;
    }
`;

const FirstSection = () => {
    const { t } = useTranslation();
    return <StyledFirstSection>
        <div className="wrapper">
            <img src={img} alt="logo"/>
            <div className="text-wrap">
                <h2>{t('firstSectionHeadline')}</h2>
                <div className="button"></div>
            </div>
        </div>
    </StyledFirstSection>
};


export default FirstSection;
