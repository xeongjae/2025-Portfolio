import "./Start.scss";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// webp포멧 구름 이미지들
import cloud1 from '../assets/images/cloud/cloud_1.webp'
import cloud2 from '../assets/images/cloud/cloud_2.webp'
import cloud3 from '../assets/images/cloud/cloud_3.webp'
import cloud4 from '../assets/images/cloud/cloud_4.webp'
import cloud5 from '../assets/images/cloud/cloud_5.webp'
import cloud6 from '../assets/images/cloud/cloud_6.webp'
import cloud7 from '../assets/images/cloud/cloud_7.webp'
import cloud8 from '../assets/images/cloud/cloud_8.webp'
import cloud9 from '../assets/images/cloud/cloud_9.webp'
import cloud10 from '../assets/images/cloud/cloud_10.webp'
import cloud11 from '../assets/images/cloud/cloud_11.webp'
import cloud12 from '../assets/images/cloud/cloud_12.webp'

function Start() {
  
  // GSAP 애니메이션
  gsap.registerPlugin(ScrollTrigger);
  const gsapOptions = {
    scrollTrigger: {
      trigger: ".Start",
      scrub: 1,
    },
    duration: 1,
  };
  useGSAP(() => {
    gsap.to(".start .title", {
      y: "-50%",
      filter: "blur(10px)",
      scale: 0.7,

      scrollTrigger: {
        trigger: ".section-02",
        scrub: 1,
      },
    });

    gsap.to(".cloud1", {
      ...gsapOptions,
      x: "-1100%",
      y: "-1700%",
      filter: "blur(30px)",
    });
    gsap.to(".cloud2", {
      ...gsapOptions,
      x: "-300%",
      y: "-400%",
      rotation: -30,
      scale: 0.5,
    });
    gsap.to(".cloud3", {
      ...gsapOptions,
      x: "-1000%",
      y: "-500%",
      filter: "blur(8px)",
    });
    gsap.to(".cloud4", {
      ...gsapOptions,
      x: "-500%",
      y: "-400%",
    });
    gsap.to(".cloud5", {
      ...gsapOptions,
      x: "-700%",
      y: "-800%",
      rotation: -100,
      filter: "blur(40px)",
      scale: 0,
    });
    gsap.to(".cloud6", {
      ...gsapOptions,
      x: "100%",
      y: "-500%",
      rotation: 20,
      filter: "blur(10px)",
      scale: 0.3,
    });
    gsap.to(".cloud7", {
      ...gsapOptions,
      x: "-100%",
      y: "-300%",
      rotation: -10,
      scale: 1,
    });
    gsap.to(".cloud8", {
      ...gsapOptions,
      x: "200%",
      y: "-400%",
      rotation: 20,
    });
    gsap.to(".cloud9", {
      ...gsapOptions,
      x: "400%",
      y: "-600%",
      rotation: 100,
      filter: "blur(25px)",
      scale: 0.5,
    });
    gsap.to(".cloud10", {
      ...gsapOptions,
      x: "400%",
      y: "-600%",
      scale: 0,
    });
    gsap.to(".cloud11", {
      ...gsapOptions,
      x: "300%",
      y: "-300%",
      rotation: 60,
      filter: "blur(10px)",
      scale: 0,
    });
    gsap.to(".cloud12", {
      ...gsapOptions,
      x: "400%",
      y: "-300%",
      rotation: 20,
    });
  }, []);

  
  return (
    <section className="start">
      <img src={cloud1} className="cloud cloud1" alt="cloud" />
      <img src={cloud2} className="cloud cloud2" alt="cloud2" />
      <img src={cloud3} className="cloud cloud3" alt="cloud3" />
      <img src={cloud4} className="cloud cloud4" alt="cloud4" />
      <img src={cloud5} className="cloud cloud5" alt="cloud5" />
      <img src={cloud6} className="cloud cloud6" alt="cloud6" />
      <img src={cloud7} className="cloud cloud7" alt="cloud7" />
      <img src={cloud8} className="cloud cloud8" alt="cloud8" />
      <img src={cloud9} className="cloud cloud9" alt="cloud9" />
      <img src={cloud10} className="cloud cloud10" alt="cloud10" />
      <img src={cloud11} className="cloud cloud11" alt="cloud11" />
      <img src={cloud12} className="cloud cloud12" alt="cloud12" />

      <div className="title">
        <h1 className="letter-space">Hello, I'm</h1>
        <h1 className="point">FronTenD</h1>
        <h1>DeVel0PeR</h1>
        <h1 className="point">Se0ngJae</h1>
      </div>
    </section>
  );
}

export default Start;
