import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import YoutubeCont from "../youtube/YoutubeCont.jsx";
import YoutubeSlider from "../youtube/YoutubeSlider.jsx";
import YoutubeSearch from "../youtube/YoutubeSearch.jsx";
import YoutubeTag from "../youtube/YoutubeTag.jsx";
import ContTitle from "../layout/ContTitle.jsx";
const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=조코딩&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSlider youtubes={youtubes} />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag Tag={search} />
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
