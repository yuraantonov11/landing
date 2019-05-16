import React from 'react';
import {createGlobalStyle} from 'styled-components';
import './utils/i18n';
import Header from './components/header';
import FooterComponent from './components/footer';
import FirstSection from './components/first-section';
import SecondSection from './components/second-section';
import ThirdSection from './components/third-section';

// Global Style
const GlobalStyle = createGlobalStyle`
    /* General Styles */
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font: normal 16px sans-serif;
        color: #555;
    }
    
    nav {
        list-style: none;
    }
    
    a {
        text-decoration: none;
        opacity: 0.75;
        color: white;
    }
    
    a:hover {
        opacity: 1;
    }
    
    a.btn {
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        background-color: #3f51b5;
        opacity: 1;
    }
    
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 80px;
    }
    
    section:not(.hero):nth-child(even) {
        background-color: #f5f5f5;
    }
    
    ul {
        list-style: none;
    }
    
    .App {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto 358px auto;
    }
    section,
    header,
    footer {
      grid-column: 1 / span 5;
    }
    
    hr {
        width: 250px;
        height: 3px;
        background-color: #3f51b5;
        border: 0;
        margin-bottom: 50px;
    }
    
    section h3.title {
        text-transform: capitalize;
        font: bold 32px "Open Sans", sans-serif;
        margin-bottom: 30px;
        text-align: center;
    }
    
    section p {
        max-width: 775px;
        line-height: 2;
        padding: 0 20px;
        margin-bottom: 30px;
        text-align: center;
    }
    
    @media screen and (max-width: 800px) {
        section {
            padding: 50px 20px;
        }
    }
`;

const App: React.FC = () => <main className="App">
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FooterComponent />
    <GlobalStyle />
</main>;

export default App;
