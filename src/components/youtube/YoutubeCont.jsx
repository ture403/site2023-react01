import React from "react";
const YoutubeItem = ({ youtube, key }) => {
  return (
    <li key={key}>
      <img
        src={youtube.snippet.thumbnails.medium.url}
        alt={youtube.snippet.title}
      />
      <span>{youtube.snippet.title}</span>
    </li>
  );
};
const YoutubeCont = ({ youtubes }) => {
  return (
    <div className="youtube__cont container">
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
