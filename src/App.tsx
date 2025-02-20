import "./assets/css/fonts.css";

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';

const App:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;