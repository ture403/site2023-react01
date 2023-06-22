import React from 'react';
import Contents from '../layout/Contents';
import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Portfolio from '../section/Portfolio';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap nexon" />
        <Intro attr="intro__wrap section nexon" />
        <Portfolio attr="port__wrap section center bg-blue nexon" />
        <Youtube attr={'youtube__wrap section nexon'} />
        <Unsplash attr={'unsplash__wrap nexon'} />
        <Movie attr={'movie__wrap nexon'} />
      </Contents>
    </>
  );
};

export default Home;
