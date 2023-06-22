import React from 'react';

const Unsplash = props => {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>수묵화 이미지 다운로드 </h3>
          <p>
            수묵화를 다운받을 수 있습니다. <br />
            png 파일로 다운받을수 있습니다.
          </p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="../assets/images/unsplash/image01.png" alt="사진" />
          </div>
          <div>
            <img src="../assets/images/unsplash/image02.png" alt="사진" />
          </div>
          <div>
            <img src="../assets/images/unsplash/image03.png" alt="사진" />
          </div>
          <div>
            <img src="../assets/images/unsplash/image04.png" alt="사진" />
          </div>
          <div>
            <img src="../assets/images/unsplash/image05.png" alt="사진" />
          </div>
          <div>
            <img src="../assets/images/unsplash/image01.png" alt="사진" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
