import React from 'react';
import { Link } from 'react-router-dom';

const Movie = props => {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movie__inner">
        <div className="movie__inner container">
          <div className="movie__text">
            <h3>그림 영화</h3>
            <p>
              Netflix와 Youtube등 다양한 경로에서
              <br />
              그림 관련 영화를 시청할 수 있습니다.
            </p>
            <Link to="/" className="button-green">
              자세히 보기
            </Link>
          </div>
          <div className="movie__item">
            <div>
              <img src="../assets/images/movie/movie01.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/movie/movie02.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/movie/movie03.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/movie/movie04.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/movie/movie05.png" alt="유튜브" />
            </div>
            <div>
              <img src="../assets/images/movie/movie06.png" alt="유튜브" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
