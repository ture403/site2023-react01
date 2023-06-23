import React from "react";

const Tags = [
  { name: "코딩 애플" },
  { name: "조코딩" },
  { name: "노마드코딩" },
  { name: "코딩알려주는누나" },
  { name: "드림코딩" },
];

const YoutubeTag = ({ Tag }) => {
  function btnClick(e) {
    Tag(e.target.innerText);
  }
  return (
    <div className="youtube__tag container">
      <ul>
        {Tags.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeTag;
