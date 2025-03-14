import "./Main.scss";

import Header from "../components/Header";
import Start from "../sections/Start";
import About from "../sections/About";
import Project from "../sections/Project";
import Contact from "../sections/Contact";

const Main: React.FC = () => {

  return (
    <div className="main-container">
      <Header />
      <main className="main">
        <Start />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
