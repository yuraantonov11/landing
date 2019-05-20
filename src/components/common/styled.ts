import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import colors from './colors';
import bg from '../../images/bg01.png';

const gradientMixin = css`
  background-image: linear-gradient(to top right, ${colors.green1}, ${colors.blue1});
`;

const Button = styled.button`
  font: inherit;
  padding: 5px 45px;
  border-radius: 5rem;
  margin-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
`;

const ButtonPrimary = styled(Button)`
  background-color: ${colors.grey0};
  color: ${colors.white1};
  border: 2px solid ${colors.white1};
`;

const ButtonSecondary = styled(Button)`
  background-color: ${colors.white1};
  color: ${colors.grey0};
  border: 2px solid ${colors.white1};
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
`;

const ProgramButton = styled(Button)`
  background-color: ${colors.blue1};
  color: ${colors.white0};
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
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
export const StyledFirstSection = styled.section`
    display: grid;
    width: 100%;
    background-image: url(${bg});
    background-position-x: 50%;
    color: ${colors.white1};
    align-items: flex-start;
    .text-wrapper{
      margin-left: 1.6rem;
      color: ${colors.white0};
    }
    .wrapper{
    &>img{
      width: 30%;
      margin: 0 29px;
      }
    }
`;

export const StyledSecondSection = styled.section`
  background-color: ${colors.white1};
  color: ${colors.black1};
  justify-content: flex-start;
  padding: 3rem 0;
  .wrapper{
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
    @media screen and (max-width: 800px) {
      .programs-list{
        grid-template-columns: repeat(1, 1fr);
        column-gap: 0;
        row-gap: 15px;
      }
    }
}
`;
export const StyledThirdSection = styled.section`
  .wrapper{
    flex-direction: column;
    padding: 2rem 0;
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

