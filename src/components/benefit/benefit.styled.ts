import styled from 'styled-components';
import colors from '../common/colors';


const StyledBenefit = styled.div`
    width: 100%;
    title{
      display: block;
      color: ${colors.blue1};
    }
    .icon{
      font-family: "Leinero", serif; font-weight: 900; content: "\E970";
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

export default StyledBenefit;

