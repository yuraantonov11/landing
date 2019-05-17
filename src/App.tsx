import React from 'react';
import './utils/i18n';
import Header from './components/header';
import FooterComponent from './components/footer';
import FirstSection from './components/first-section';
import SecondSection from './components/second-section';
import ThirdSection from './components/third-section';
import './App.css';

const App: React.FC = () => <main className="App">
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FooterComponent />
</main>;

export default App;
