import React from 'react';
import StyledHeader from './header.styled';
import logo from '../../images/moneto-logo.svg';
import { useTranslation } from "react-i18next";
import {ButtonPrimary, ButtonSecondary, LangButton} from '../common/styled';
import {Link} from 'react-router-dom';


const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language : string) => i18n.changeLanguage(language);
    const languages = ['de', 'fr', 'en'];

    return <StyledHeader>
        <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
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
                <Link to="/login">
                    <ButtonPrimary>{t('loginBtn')}</ButtonPrimary>
                </Link>
                <Link to="/register">
                    <ButtonSecondary>{t('registerBtn')}</ButtonSecondary>
                </Link>
            </div>
            <div className="user mobile">
                <ButtonPrimary>{t('loginBtn') + '/' + t('registerBtn')}</ButtonPrimary>
            </div>
        </nav>
    </StyledHeader>;
};

export default Header;
