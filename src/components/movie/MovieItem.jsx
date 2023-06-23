import React from "react";

const MovieItem = ({ index, image }) => {
  return (
    <li key={index}>
      <a href={`https://www.themoviedb.org/movie/${image.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
          alt={image.original_title}
        />
        <em>
          <p className="title">{image.title}</p>
          <span className="star">{image.vote_average}</span>
        </em>
      </a>
    </li>
  );
};
export default MovieItem;
