import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './utils/i18n';
import Header from './components/header';
import FooterComponent from './components/footer';
import FirstSection from './components/first-section';
import SecondSection from './components/second-section';
import ThirdSection from './components/third-section';
import './App.css';

const App: React.FC = () => <main className="App">
    <BrowserRouter>
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FooterComponent />
    </BrowserRouter>
</main>;

export default App;
