import React from 'react';
import styled from 'styled-components'
import bg from '../images/bg01.png';
import img from '../images/moneto-full.svg';

const StyledFirstSection = styled.section`
    width: 100%;
    background-image: url(${bg});
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    h2{
      display: flex;
    }
`;

const FirstSection = () => <StyledFirstSection>
    <img src={img} alt="logo"/>
    <h2>texxt</h2>
</StyledFirstSection>;

export default FirstSection;
