import "./UsedStackCard.scss";

import useThemeStore from "../hooks/useThemeStore";

type Props = {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
};

const UsedStackCard: React.FC<Props> = ({ children, title, icon }) => {
  const { isLightMode } = useThemeStore();

  return (
    <div className={`used-stack-card ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div>
        <div className="title-box">
          <div className="icon">{icon}</div>
          <h2 className="title">{title}</h2>
        </div>
        <div className="text">{children}</div>
      </div>
    </div>
  );
};

export default UsedStackCard;
