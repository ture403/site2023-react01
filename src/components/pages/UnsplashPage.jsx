import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import UnsplashCont from '../unsplash/UnsplashCont.jsx';
import UnsplashSlider from '../unsplash/UnsplashSlider.jsx';
import UnsplashSearch from '../unsplash/UnsplashSearch.jsx';
import UnsplashTag from '../unsplash/UnsplashTag.jsx';
import ContTitle from '../layout/ContTitle.jsx';
const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async query => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    await fetch(
      `https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=${query}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setImages(result.results))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=seoul',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setImages(result.results))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <Contents>
      <ContTitle title="unsplash" />
      <UnsplashSlider />
      <UnsplashSearch onSearch={search} />
      <UnsplashTag Tag={search} />
      <UnsplashCont images={images} />
    </Contents>
  );
};

export default UnsplashPage;
