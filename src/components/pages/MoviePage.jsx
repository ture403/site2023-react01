import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import MovieCont from "../movie/MovieCont.jsx";
import MovieSlider from "../movie/MovieSlider.jsx";
import MovieTag from "../movie/MovieTag.jsx";
import ContTitle from "../layout/ContTitle.jsx";
const MoviePage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(`${query}?api_key=76bdc971ba84bff496ab1d4f27cc9c5c`)
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=76bdc971ba84bff496ab1d4f27cc9c5c"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <Contents>
      <ContTitle title="movie" />
      <MovieSlider images={images} />
      <MovieTag Tag={search} />
      <MovieCont images={images} />
    </Contents>
  );
};

export default MoviePage;
