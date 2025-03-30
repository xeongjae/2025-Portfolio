import "./Header.scss";

import { useNavigate, useParams } from "react-router-dom";

import ToggleSwitch from "./ToggleSwitch";
import useScrollVisibility from "../hooks/useHeaderVisible";
import useMoveScroll from "../hooks/useMoveScroll";
import useThemeStore from "../hooks/useThemeStore";

const Header: React.FC = () => {
  const visible = useScrollVisibility();
  const scrollToSection = useMoveScroll();
  const navigate = useNavigate();
  const { id } = useParams();

  // Zustand Store 다크모드 상태 테마 토글 함수
  const { colorMode, toggleTheme } = useThemeStore();

  // 메뉴 클릭 시 해당 섹션으로 스크롤
  const handleMenuClick = (index: number) => {
    scrollToSection(index);
  };

  // 로고 클릭 시 홈으로 이동
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  // 스위치 클릭 시 다크모드/라이트모드 변경
  const handleToggleSwitch = () => {
    toggleTheme();
  };

  // 메뉴 렌더링 함수
  const renderMenu = () => (
    <div className="menu">
      {["About", "Project", "Contact"].map((label, index) => (
        <div
          key={index}
          className="item"
          onClick={() => handleMenuClick(index + 1)}
        >
          <span className={`item${index + 1} item-text`}>{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <header
      className={`mainHeader-container ${visible ? "visible" : "hidden"} ${
        colorMode ? "light-mode" : ""
      }`}
    >
      <div className="mainHeader">
        <div className="logo">
          <div className="logo-text" onClick={handleLogoClick}>
            XJ.Portfolio
          </div>
        </div>
        {!id && renderMenu()} {/* 메인페이지에서만 메뉴 렌더링 */}
        <ToggleSwitch onClick={handleToggleSwitch} checked={colorMode} />
      </div>
    </header>
  );
};

export default Header;
