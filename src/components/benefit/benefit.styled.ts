import styled from 'styled-components';
import colors from '../common/colors';


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
    .icon{
      padding: 2rem;
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
        }    }

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

export default StyledBenefit;

