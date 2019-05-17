import React from 'react';
import styled from 'styled-components'
import colors from '../components/common/colors';
import bg from '../images/bg01.png';
import img from '../images/moneto-full.svg';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary, gradientMixin} from './common/styled';

const StyledFirstSection = styled.section`
    display: grid;
    width: 100%;
    background-image: url(${bg});
    background-position-x: 50%;
    color: ${colors.white1};
    align-items: flex-start;
    .text-wrap{
      margin-left: 1.6rem;
      color: ${colors.white0};
    }
    button{
       background-color: ${colors.grey0}99;
       text-transform: initial;
       .play_circle{
         min-width: 40px;
         min-height: 40px;
         width: 40px;
         height: 40px;
         ${gradientMixin};
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-left: -5px;
           .play_triangle {
             width: 0;
             height: 0;
             border-style: solid;
             border-width: 10px 0 10px 20px;
             border-color: transparent transparent transparent ${colors.white0};
             border-radius: 10%;
           }
        }
          .text{
              display: flex;
              flex-direction: column;
              align-items: baseline;
              padding-left: 1rem;
              .question{
                color: ${colors.blue1};
              }
          }
    }
`;


const FirstSection = () => {
    const { t } = useTranslation();
    return <StyledFirstSection>
        <div className="wrapper">
            <img src={img} alt="logo"/>
            <div className="text-wrap">
                <h2>{t('firstSectionHeadline')}</h2>
                <ButtonPrimary className="flex">
                    <div className="play_circle">
                        <div className="play_triangle" />
                    </div>
                    <div className="text">
                        <span>{t('videoButtonText')}:</span>
                        <span className="question">{t('videoButtonQuestion')}</span>
                    </div>
                </ButtonPrimary>
            </div>
        </div>
    </StyledFirstSection>
};


export default FirstSection;
