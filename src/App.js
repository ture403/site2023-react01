import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/pages/Home.jsx';
import PortPage from './components/pages/PortPage.jsx';
import YoutubePage from './components/pages/YoutubePage.jsx';
import MoviePage from './components/pages/MoviePage.jsx';
import UnsplashPage from './components/pages/UnsplashPage.jsx';
import IntroPage from './components/pages/IntroPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={['header__wrap', 'nexon5', 'bg-blue']} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/port" element={<PortPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
      </Routes>
      <Footer attr={'footer__wrap section bg-blue nexon5'} />
    </BrowserRouter>
  );
};
export default App;
