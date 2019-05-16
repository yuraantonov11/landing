import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`

/* Footer Section*/

display: flex;
align-items: center;
justify-content: space-around;
background-color: #607d8b;
color: #fff;
padding: 20px 0;

ul {
    display: flex;
}

ul li {
    margin-left: 16px;
}

p {
    text-transform: uppercase;
    font-size: 14px;
    opacity: 0.6;
    align-self: center;
}

@media screen and (max-width: 1100px) {
    footer {
        flex-direction: column;
    }

    footer p {
        text-align: center;
        margin-bottom: 20px;
        padding: 10px 20px;
    }

    footer ul li {
        margin: 0 8px;
    }
}
`;

const Footer = () => <StyledFooter>
   footer
</StyledFooter>;

export default Footer;
