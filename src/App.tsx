import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import ProjectDetail from "./pages/ProjectDetail";
import useThemeStore from "./hooks/useThemeStore";

const App: React.FC = () => {
  const { colorMode } = useThemeStore();

  // body 클래스 동적 변경
  useEffect(() => {
    if (colorMode) {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [colorMode]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project-detail/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default App;
