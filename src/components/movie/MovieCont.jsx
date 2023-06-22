import React from 'react';
import MovieItem from './MovieItem';

const MovieCont = ({ images }) => {
  return (
    <div className="movie__cont container">
      <ul>
        {images.map((image, index) => (
          <MovieItem key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
