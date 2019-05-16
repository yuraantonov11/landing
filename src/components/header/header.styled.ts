import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    background-color: #303435;
    nav{
      display: flex;
    }

@keyframes fadein {
    100% {
        opacity: 1;
    }
}

nav {
    display: flex;
    margin-right: -15px;
    .lang-bar {
        display: flex;
        align-items: center;
    }
}

nav li {
    margin: 0 15px;
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

