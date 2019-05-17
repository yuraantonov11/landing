import React from 'react';
import StyledFooter from './footer.styled';
import {StyledLink} from '../common/styled';
import img from '../../images/moneto-full.svg';
import {useTranslation} from 'react-i18next';


const FooterComponent = () => {
   const { t } = useTranslation();

   return <StyledFooter>
      <img src={img} alt="moneto" className="logo"/>
      <nav>
         <StyledLink to="/support">{t('navigation.support')}</StyledLink>
         <StyledLink to="/partner">{t('navigation.partner')}</StyledLink>
         <StyledLink to="/contact">{t('navigation.contact')}</StyledLink>
         <StyledLink to="/imprint">{t('navigation.imprint')}</StyledLink>
      </nav>
   </StyledFooter>;
};

export default FooterComponent;
