import React from 'react';
import { Link } from 'react-router-dom';

const UnsplashTag = ({ Tag }) => {
  return (
    <div className="unsplash__tag container">
      <ul>
        <li>
          <Link href="#" onClick={() => Tag('apple')}>
            apple
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('banner')}>
            banner
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('tomato')}>
            tomato
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('melon')}>
            melon
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag('orange')}>
            orange
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UnsplashTag;
