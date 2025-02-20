import "./Header.scss";

import { useEffect, useState } from "react";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="mainHeader-container">
      <div className="mainHeader">
        <div className="logo">
          <div className="logo-text">SJ's Portfolio</div>
        </div>
        <div className="menu">
          <div className="item">
            <div className={`item-text ${activeIndex === 1 ? "active" : ""}`}>
              About Me
            </div>
          </div>
          <div className="item">
            <span className={`item-text ${activeIndex === 2 ? "active" : ""}`}>
              Stack
            </span>
          </div>
          <div className="item">
            <span className={`item-text ${activeIndex === 3 ? "active" : ""}`}>
              Project
            </span>
          </div>
          <div className="item">
            <span className={`item-text ${activeIndex === 4 ? "active" : ""}`}>
              Training
            </span>
          </div>
          <div className="item">
            <span className={`item-text ${activeIndex === 5 ? "active" : ""}`}>
              Contact
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
