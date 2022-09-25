import React from 'react';
// import styled from 'styled-components';
import './Main.css';

const Main = () => {
  return (
    <>
      <div>
        <nav className="global-nav">
          <div className="global-nav-link">
            <a href="#">Rooms</a>
            <a href="#">Ideas</a>
            <a href="#">Stores</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <nav className="local-nav">
          <div className="local-nav-link">
            <a href="#" className="product-name">
              AirMug Pro
            </a>
            <a href="#">개요</a>
            <a href="#">제품사항</a>
            <a href="#">구입하기</a>
          </div>
        </nav>
      </div>
      <section className="scroll-section" id="scroll-section-0">
        <h1>AirMug Pro</h1>
        <div className="sticky-elem main-message">
          <p>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            주변 맛을 느끼게 해주는
            <br />
            주변맛 허용 모드
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            새롭게 입가를
            <br />
            찾아온 매혹
          </p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <div className="description">
          <p>
            <strong>보통 스크롤</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing , Lorem ipsum dolor sit amet,
            consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum
            dolor sit amet, consectetur adipisicing , Lorem ipsum dolor sit amet, consectetur
            adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit
            amet, consectetur adipisicing , Lorem ipsum dolor sit amet, consectetur adipisicing,
            Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet,
            consectetur adipisicing , Lorem ipsum dolor sit amet, consectetur adipisicing, Lorem
            ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-2">
        {' '}
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>
            <p>입과 하나 되다</p>
          </p>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고
            재구성하는 가정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는
            감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            디자인 앤 퀄리티 오브 스웨덴,
            <br />
            메이드 인 차이나
          </p>
          <div className="pin"></div>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong>
          <br />
          아이디어를 광활하게 펼칠
          <br />
          아릅답고 부드러운 음료 공간.
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor sit amet, consectetur adipisicing , Lorem ipsum dolor sit amet,
          consectetur adipisicing, Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
      </section>
      <footer className="footer">2022, 애플 사이트!</footer>
    </>
  );
};

// const Container = styled.div``;a

export default Main;
