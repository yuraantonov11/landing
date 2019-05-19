import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import colors from './colors';

const Button = styled.button`
  font: inherit;
  padding: 5px 45px;
  border-radius: 5rem;
  margin-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
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
const ProgramButton = styled(Button)`
  background-color: ${colors.blue1};
  color: ${colors.white0};
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const gradientMixin = css`
  background-image: linear-gradient(to top right, ${colors.green1}, ${colors.blue1});
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

export {
    Button,
    ButtonPrimary,
    ButtonSecondary,
    LangButton,
    ProgramButton,
    StyledLink,
    gradientMixin
};

