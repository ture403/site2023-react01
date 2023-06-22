import React from 'react';
import Contents from '../layout/Contents';
import YoutubeCont from '../youtube/YoutubeCont.jsx';
import YoutubeSlider from '../youtube/YoutubeSlider.jsx';
import YoutubeSearch from '../youtube/YoutubeSearch.jsx';
import YoutubeTag from '../youtube/YoutubeTag.jsx';
import ContTitle from '../layout/ContTitle.jsx';
const YoutubePage = () => {
  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSlider />
      <YoutubeSearch />
      <YoutubeTag />
      <YoutubeCont />
    </Contents>
  );
};

export default YoutubePage;
