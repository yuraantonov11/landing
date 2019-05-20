import React from 'react';
import StyledHeader from './header.styled';
import logo from '../../images/moneto-logo.svg';
import { useTranslation } from "react-i18next";
import {ButtonPrimary, ButtonSecondary, LangButton} from '../common/styled';


const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language : string) => i18n.changeLanguage(language);
    const languages = ['de', 'fr', 'en'];

    return <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <div className="lang-bar">
                {languages.map(lang =>
                    <LangButton
                        className={lang === i18n.language ? 'active' : ''}
                        key={lang}
                        onClick={() => changeLanguage(lang)}>
                        {lang}
                    </LangButton>
                )}
            </div>
            <div className="user desktop">
                <ButtonPrimary>{t('loginBtn')}</ButtonPrimary>
                <ButtonSecondary>{t('registerBtn')}</ButtonSecondary>
            </div>
            <div className="user mobile">
                <ButtonSecondary>{t('loginBtn') + '/' + t('registerBtn')}</ButtonSecondary>
            </div>
        </nav>
    </StyledHeader>;
};

export default Header;
