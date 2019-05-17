import styled from 'styled-components';
import colors from '../common/colors';
import {gradientMixin} from '../common/styled';


const StyledHeader = styled.div`
    padding: 20px 50px;
    background-color: ${colors.white2};
    border-radius: 5px;
    border: 1px solid ${colors.white0};
    .time{
      align-self: end;
    }
    &.highlighted{
      background-color: ${colors.white0};
      button{
        ${gradientMixin};
      }
    }
    title{
      color: ${colors.blue1};
      display: block;
    }
  

@media screen and (max-width: 800px) {
    padding: 20px 50px;
    flex-direction: column;

    img {
        margin-bottom: 15px;
    }

    nav {
        margin-right: 0;
    }
}
`;

export default StyledHeader;

