import styled from 'styled-components';
import colors from '../common/colors';
import {device} from '../common/device';


const StyledBenefit = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    title{
      display: block;
      color: ${colors.blue1};
    }
    .text{
       position: relative;
       width: 100%;
       padding: 50px 0;
       &::after{
          width: 30%;
          border: 1px solid ${colors.white1};
          content: '';
          bottom: 0;
          left: 0;
          position: absolute;
       }
    }
   &:last-child .text::after{
      width: 0;
   }

@media ${device.tablet} {

    img {
        margin-bottom: 15px;
    }

    nav {
        margin-right: 0;
    }
    .text{
        padding: 1rem 0;
    }
}
`;

export default StyledBenefit;

