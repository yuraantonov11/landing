import {MainButton, StyledFirstSection, StyledSecondSection, StyledThirdSection} from './common/styled';
import img from '../images/moneto-full.svg';
import imgLabel from '../images/moneto-label.svg';
import React from 'react';
import {useTranslation} from 'react-i18next';
import ProgramComponent from './program';
import BenefitComponent from './benefit';
import Footer from './footer';


const Landing = () => {
    const { t } = useTranslation();
    return <>
        <StyledFirstSection>
            <div className="wrapper">
                <img src={img} alt="logo" className="desktop"/>
                <img src={imgLabel} alt="logo" className="mobile"/>
                <div className="text-wrapper">
                    <h2>{t('firstSectionHeadline')}</h2>
                    <MainButton className="flex">
                        <div className="play_circle">
                            <div className="play_triangle" />
                        </div>
                        <div className="text">
                            <span>{t('videoButtonText')}:</span>
                            <span className="question">{t('videoButtonQuestion')}</span>
                        </div>
                    </MainButton>
                </div>
            </div>
        </StyledFirstSection>
        <StyledSecondSection>
            <div className="wrapper">
                <div className="text-wrapper">
                    <h2>{t('secondSectionHeadline')}</h2>
                    <span>{t('secondSectionTitle')}</span>
                </div>
                <div className="programs-list">
                    <ProgramComponent />
                    <ProgramComponent second className="highlighted gradient" />
                </div>
            </div>

        </StyledSecondSection>
        <StyledThirdSection>
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
                    icon="phone"
                    title={t('benefits.second.title')}
                    content={t('benefits.second.content')}
                />
            </div>
        </StyledThirdSection>
        <Footer />
    </>
};

export default Landing;
