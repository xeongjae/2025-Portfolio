import "./Main.scss";

import Header from "../components/Header";
import Start from "../sections/Start";
import AboutMe from "../sections/AboutMe";
import UsedStack from "../sections/UsedStack";
import Project from "../sections/Project";
import Contact from "../sections/Contact";

function Main() {

  return (
    <div className="main-container">
      <Header />
      <main className="main">
        <section>
          <Start />
        </section>
        <section className="layout about-me-bg">
          <AboutMe />
        </section>
        <section className="layout used-stack-bg">
          <UsedStack />
        </section>
        <section className="layout project-bg">
          <Project />
        </section>
        <section className="layout">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Main;
