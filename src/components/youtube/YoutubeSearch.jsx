import React, { useRef } from "react";

const YoutubeSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const unsplashSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      unsplashSearch();
    }
  };

  const onclick = () => {
    unsplashSearch();
  };
  return (
    <div className="youtube__search container">
      <input
        ref={inputRef}
        type="search"
        placeholder="유튜브 검색하기"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onclick}>
        검색
      </button>
    </div>
  );
};

export default YoutubeSearch;
