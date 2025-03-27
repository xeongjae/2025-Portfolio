import "./Start.scss";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

import useMoveScroll from "../hooks/useMoveScroll";
import useThemeStore from "../hooks/useThemeStore";

const Start: React.FC = () => {
  const { colorMode } = useThemeStore();
  const el = useRef<HTMLSpanElement>(null);
  const scrollToSection = useMoveScroll();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["JavaScript", "React", "TypeScript", "Recoil", "RestApi"],
      typeSpeed: 70,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 700,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className={`start-container ${colorMode ? "light-mode" : "dark-mode"}`}
    >
      <div className="frontend-text">FrontEnd</div>
      <div className="code-text">{"</>"}</div>
      <div className="react-text">React</div>
      <div className="typescript-text">TypeScript</div>

      <div className="text-container">
        <div className="portfolio-title">FE PortFolio</div>
        <h1 className="main-heading">
          만나서
          <br className="lg-hidden" /> 반가워{" "}
          <span className="lg-inline">👋</span>
        </h1>
        <div className="typed-container">
          <span ref={el} className="typed-text" />
        </div>
        <div className="tag-container">
          <span className="tag tag1" onClick={() => scrollToSection(1)}>
            About
          </span>
          <span className="tag tag2" onClick={() => scrollToSection(2)}>
            Project
          </span>
          <span className="tag tag3" onClick={() => scrollToSection(3)}>
            Contact
          </span>
        </div>
      </div>
    </section>
  );
};

export default Start;
