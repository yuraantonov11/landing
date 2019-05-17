import styled from 'styled-components';
import colors from './colors';

const Button = styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border-radius: 2rem;
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
`;

export {
    Button,
    ButtonPrimary,
    ButtonSecondary,
    LangButton,
    ProgramButton
};

