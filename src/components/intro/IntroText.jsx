import React from "react";

const IntroText = () => {
  return (
    <>
      <div className="intro__proflie nexon">
        <div className="intro__proflie__wrap">
          <h2>동양화란?</h2>
          <span>
            동양화는 동양 문화 영향을 받은 회화의 한 스타일입니다. 주로 동아시아
            지역에서 발전하였으며, <br /> 중국, 일본, 한국을 중심으로
            발전하였습니다. 동양화는 동양의 예술, 철학, 역사, 문화, 자연 등을{" "}
            <br />
            주제로 하며, 동양의 고유한 미학과 정서를 표현하는 것을 목표로
            합니다.
          </span>
        </div>
        <div className="link">
          <a href="/">전시회 알아보기</a>
          <a href="/">전시회 바로가기</a>
        </div>
        <div className="intro__proflie__desc"></div>
      </div>
    </>
  );
};

export default IntroText;
