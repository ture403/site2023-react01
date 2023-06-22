import React from "react";
import { Link } from "react-router-dom";
const YoutubeTag = ({ Tag }) => {
  return (
    <div className="youtube__tag container">
      <ul>
        <li>
          <Link href="#" onClick={() => Tag("코딩 애플")}>
            코딩 애플
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag("조코딩")}>
            조코딩
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag("노마드코딩")}>
            노마드 코딩
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag("코딩알려주는누나")}>
            코딩알려주는 누나
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => Tag("드림코딩")}>
            드림코딩
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default YoutubeTag;
