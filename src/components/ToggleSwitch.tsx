import { FC } from "react";
import "./ToggleSwitch.scss";

// ToggleSwitch가 부모로부터 onClick과 checked를 받도록 수정
interface ToggleSwitchProps {
  onClick: () => void;
  checked: boolean;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ onClick, checked }) => {
  return (
    <div
      className={`toggle-switch ${checked ? "active" : ""}`} // checked 상태에 따라 스타일 변경
      onClick={onClick} // 클릭 시 부모로부터 전달받은 onClick 실행
    >
      <div className="track"></div>
      <div className="thumb"></div>
    </div>
  );
};

export default ToggleSwitch;