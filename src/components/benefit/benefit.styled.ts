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
    .icon{
      padding: 1rem;
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
        &.mobile{
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

