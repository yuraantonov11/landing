import React from 'react';
import StyledFooter from './footer.styled';
import img from '../../images/moneto-full.svg';


const FooterComponent = () => <StyledFooter>
   <img src={img} alt="moneto" className="logo"/>
   <nav>
      <button>1</button>
      <button>2</button>
      <button>3</button>
   </nav>
</StyledFooter>;

export default FooterComponent;
