import { Link } from 'react-router-dom';

const MovieTag = ({ Tag }) => {
  return (
    <div className="movie__tag container">
      <ul>
        <li>
          <Link href="#" onClick={() => Tag('men')}>
            men
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('girl')}>
            girl
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('tree')}>
            tree
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('apple')}>
            apple
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('water')}>
            water
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieTag;
