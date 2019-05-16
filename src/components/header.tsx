import React from 'react';
import styled from 'styled-components'
import logo from '../images/moneto-logo.svg';

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

header img {
}

header nav {
    display: flex;
    margin-right: -15px;
}

header nav li {
    margin: 0 15px;
}

@media screen and (max-width: 800px) {
    header {
        padding: 20px 50px;
        flex-direction: column;
    }

    header img {
        margin-bottom: 15px;
    }

    header nav {
        margin-right: 0;
    }
}
`;

const Header = () => <StyledHeader>
    <img src={logo} className="App-logo" alt="logo" />
    <nav>
        <div className="lang-bar">
            <button>de</button>
            <button>fr</button>
            <button>en</button>
        </div>
        <div className="user">
            <button>Login</button>
            <button>Account Erstellen</button>
        </div>
    </nav>
</StyledHeader>;

export default Header;
