import { useEffect, useRef } from "react";
import "./AboutMe.scss";
import Typed from "typed.js";

function AboutMe() {
  const typedEl = useRef(null);
  const observerRef = useRef(null); // Intersection Observer의 ref

  useEffect(() => {
    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typed = new Typed(typedEl.current, {
              strings: ["안녕하세요, 프론트엔드 개발자 김성재입니다!"],
              typeSpeed: 80,
              loop: false,
              smartBackspace: true,
              fadeOut: true,
              fadeOutClass: "typed-fade-out",
              fadeOutDelay: 1000,
            });
            observerRef.current = typed;
          } else {
            observerRef.current?.destroy();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (typedEl.current) {
      observer.observe(typedEl.current);
    }

    // 컴포넌트 언마운트 시 observer와 Typed 인스턴스 정리
    return () => {
      observer.disconnect();
      observerRef.current?.destroy();
    };
  }, []);

  return (
    <section className="about-me">
      <div className="contents">
        <div className="img-box">
          <img
            src="/profile1.png"
            property="true"
            className="img"
            alt="profile"
          />
          <div className="tag-box">
            <div className="tag">#열정</div>
            <div className="tag">#자기주도적</div>
            <div className="tag">#협업</div>
          </div>
        </div>
        <div className="text">
          <div className="type-text-box">
            <span className="type-text" ref={typedEl}></span>
          </div>
          <p>
            <img src="/cloud_1.webp" className="cloud" alt="cloud" /> &nbsp;
            <br />
            <span>
              과정을 즐기고 새로운 지식을 얻는 것을 좋아하는{" "}
              <span className="point">열정파</span>입니다.
            </span>
          </p>
          <p>
            <img src="/cloud_2.webp" className="cloud" alt="cloud" /> &nbsp;
            <br />
            <span>
              주어진 업무에 그치지 않고{" "}
              <span className="point">주도적으로 팀에 기여</span>
              합니다.
            </span>
          </p>
          <p>
            <img src="/cloud_4.webp" className="cloud" alt="cloud" /> &nbsp;
            <br />
            <span>
              항상 <span className="point">협업을 고려한 코드</span>를 작성하고{" "}
              <span className="point">성능 개선</span>에 집중합니다.
            </span>
          </p>
          <div className="tag-box">
            <div className="tag">#열정</div>
            <div className="tag">#자기주도적</div>
            <div className="tag">#협업</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
