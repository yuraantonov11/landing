import styled from 'styled-components';
import colors from '../common/colors';
import {gradientMixin} from '../common/styled';
import {device} from '../common/device';


const StyledHeader = styled.div`
    padding: 20px 40px;
    background-color: ${colors.white2};
    border-radius: 5px;
    border: 1px solid ${colors.white0};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &.highlighted{
      background-color: ${colors.white0};
      button{
        ${gradientMixin};
        margin: 0;
      }
    }
    title{
      color: ${colors.blue1};
      display: block;
    }
    .content{
      color: ${colors.black1};
      text-align: left;
      padding: 0;
    }

@media ${device.tablet} {
    padding: 20px 50px;
    flex-direction: column;

    img {
        margin-bottom: 15px;
    }

    nav {
        margin-right: 0;
    }
}
@media ${device.mobileS} {
    padding: 10px 30px;
}
`;

export default StyledHeader;

