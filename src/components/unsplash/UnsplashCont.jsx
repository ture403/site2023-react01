import React from 'react';

const UnsplashImg = ({ image, index }) => {
  return (
    <li key={index}>
      <a href={`https://unsplash.com/search/photos/${image.id}`}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className="Unsplash__cont container">
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
