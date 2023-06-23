import React from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import IntroText from "../intro/IntroText";
const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title="intro" />
      <IntroText />
    </Contents>
  );
};

export default IntroPage;
