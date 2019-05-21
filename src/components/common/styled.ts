import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import colors from './colors';
import bg from '../../images/bg01.png';
import {device} from './device';

const gradientMixin = css`
  background-image: linear-gradient(to top right, ${colors.green1}, ${colors.blue1});
`;

const Button = styled.button`
  font-size: 16px;
  padding: 5px 45px;
  border-radius: 5rem;
  margin-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  @media ${device.tablet} {
    padding: 5px 16px;
  }
`;

const ButtonPrimary = styled(Button)`
  background-color: ${colors.grey0};
  color: ${colors.white1};
  border: 1px solid ${colors.white1};
`;

const ButtonSecondary = styled(Button)`
  background-color: ${colors.white1};
  color: ${colors.grey0};
  border: 1px solid ${colors.white1};
  padding: 5px 20px;
`;

const LangButton = styled.a`
  font: inherit;
  margin-right: 0.5em;
  cursor: pointer;
  color: ${colors.grey1};
  text-transform: uppercase;
  &.active{
    color: ${colors.white1};
    text-decoration: underline;
  }
`;
export const MainButton = styled(ButtonPrimary)`
    background-color: ${colors.grey0}99;
    text-transform: initial;
    padding-left: .7rem;
    display: flex;
    align-items: center;
    margin: 25px 0;
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
  @media ${device.tablet} {
     padding: 5px 10px;
     margin: 1rem auto;
  }
`;

const ProgramButton = styled(Button)`
  background-color: ${colors.blue1};
  color: ${colors.white0};
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${device.tablet} {
    align-self: center;
  }
`;

const StyledLink = styled(Link)`
    color: ${colors.grey1};
    display: block;
    margin: 0 1rem;
    text-transform: lowercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
}`;

export const Icon = styled.span`
    padding: 2rem;
    display: flex;
    align-items: center;
    color: ${colors.grey1};
    &::before{
      color: ${colors.blue1};
      font-style: normal;
      font-size: 50px;
      font-family: "Leinero", serif;
    }
    &.lock{
      &::before{
        content: "\\e9ef";
      }
    }
    &.squares{
      &::before{
        content: "\\e970";
      }
    }
    &.phone{
      &::before{
        content: "\\e9ca";
      }
    }
    &.clock{
      align-self: flex-end;
      padding: 0;
      margin-right: -15px;
      &::before{
        padding: 0 .5rem;
        font-size: 35px;
        color: ${colors.grey1};
        content: "\\ea1a";
      }
    }
`;
export const StyledFirstSection = styled.section`
grid-area: section1;
display: grid;
width: 100%;
background-image: url(${bg});
background-position-x: 50%;
background-size: cover;
color: ${colors.white1};
align-items: flex-start;
.text-wrapper{
    margin-left: 1.6rem;
    color: ${colors.white0};
}
.wrapper{
    align-items: start;
    padding: 3rem 0;
  &>img{
    width: 30%;
    margin: 5px 29px;
  }
}
@media ${device.tablet} {
    background-position-x: 60%;
    h2{line-height: 1.2;}
    .wrapper>img, .text-wrapper{margin: 5px 0;}
}
@media ${device.mobileS} {
  .wrapper{
    padding: 0;
  }
}
`;

export const StyledSecondSection = styled.section`
    background-color: ${colors.white1};
    color: ${colors.black1};
    justify-content: flex-start;
    padding: 3rem 0;
  grid-area: section2;
    .wrapper{
      display: flex;
      flex-direction: column;
    .text-wrapper{
      margin-bottom: 25px;
      h2{
        font-weight: 400;
        margin: 1rem 0;
      }
      span{
        font-weight: 400;
        margin: 1rem 0;
      }
    }
    .programs-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 15px;
    }
  }
  @media ${device.tablet} {
      padding: 0;
      .wrapper{
          .programs-list{
            gap: 15px;
            grid-template-columns: repeat(1,1fr)
          }
      }
}
`;
export const StyledThirdSection = styled.section`
  grid-area: section3;
  .wrapper{
    flex-direction: column;
    padding: 2rem 0;
  }
`;
export const MainComponent = styled.main`
    display: grid;
    grid-template-columns: 1.1fr .9fr .9fr 1.1fr;
    grid-template-rows: max-content;
    grid-template-areas: 
        "header header header header"
        ". section1 section1 ."
        ". section2 section2 ."
        ". section3 section3 ."
        "footer footer footer footer";
    section {
        display: grid;
        grid-template-columns: 1.1fr .9fr .9fr 1.1fr;
        grid-column: 1 / span 5;
    }
    section .wrapper{
        grid-column: 2/4;
        display: flex;
        align-self: center;
    }
    
    section h3.title {
        text-transform: capitalize;
        font: bold 32px "Open Sans", sans-serif;
        margin-bottom: 30px;
        text-align: center;
    }
    
    section p {
        max-width: 775px;
        line-height: 2;
        padding: 0 20px;
        margin-bottom: 30px;
        text-align: center;
    }
    @media ${device.laptopL} {
        section{
            grid-template-columns: 1fr 1fr 1fr 1fr ;
        }
    }
    @media ${device.laptop} {
        section{
            grid-template-columns: 15% 1fr 1fr 15%;
        }
    }
    @media ${device.tablet} {
        grid-template-columns: 0 1fr 1fr 0;
        grid-template-rows: auto;
        grid-column: 1;
        section{
            grid-template-columns: 10% 1fr 1fr 10%;
            padding: 1rem 0;
            align-content: flex-start;
        }
        section .wrapper{
            flex-direction: column;
            grid-column: 2 / span 2;
        }
    }
    @media ${device.mobileS} {
        section{
            grid-template-columns: 5% 1fr 1fr 5%;
            align-content: flex-start;
        }
    }
`;

export {
    Button,
    ButtonPrimary,
    ButtonSecondary,
    LangButton,
    ProgramButton,
    StyledLink,
    gradientMixin
};

