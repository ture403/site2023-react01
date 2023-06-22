import React, { useRef } from 'react';

const UnsplashSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const unsplashSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      unsplashSearch();
    }
  };

  const onclick = () => {
    unsplashSearch();
  };
  return (
    <div className="unsplash__search container">
      <h2 className="blind">검색하기</h2>
      <input ref={inputRef} type="search" placeholder="검색해 주세요" onKeyPress={onKeyPress} />
      <button type="submit" onClick={onclick}>
        검색하기
      </button>
    </div>
  );
};

export default UnsplashSearch;
