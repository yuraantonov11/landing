import styled from 'styled-components';
import {device} from '../common/device';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    background-color: #303435;
    grid-area: header;
    nav{
      display: flex;
    }

nav {
    display: flex;
    .lang-bar {
        display: flex;
        align-items: center;
    }
}

nav li {
    margin: 0 15px;
}

@media ${device.tablet} {
    padding: 15px;
    flex-direction: row;

    nav {
        margin-right: 0;
        .lang-bar{
          display: none;
        }
    }
}
`;

export default StyledHeader;

