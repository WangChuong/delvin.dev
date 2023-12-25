import React from "react";

import '/src/Flexible.css';
import git from "/src/assets/githubHD.jpg";
import { SectionWrapper } from "../hoc";
import fb from "/src/assets/facebook.png";
import ins from "/src/assets/insta.jpg";
import tele from "/src/assets/tele.jpg";

const About = () => {
  const connectLinkFB = 'https://www.facebook.com/quangtruongfitness';
  const connectLinkIns = 'https://www.instagram.com/quang_truongx/';
  const connectLinkGit = 'https://github.com/WangChuong';
  const connectLinkTele = 'https://t.me/KillerX01';
  return (
    <>
        <div className="square-grid">
      {/* Hàng 1 */}
      <div className="square-box">
        <div className="title">FACEBOOK</div>
        <div className="content">
        <img src={fb} alt="Facebook" />
        <a href={connectLinkFB} target="_blank">
          <button>Connect</button>
        </a>
        </div>
      </div>
      <div className="square-box">
        <div className="title">INSTAGRAM</div>
        <div className="content">
        <img src={ins} alt="Instagram" />
        <a href={connectLinkIns} target="_blank">
          <button>Connect</button>
        </a>
        </div>
      </div>
      <div className="square-box">
        <div className="title">GITHUB</div>
        <div className="content">
        <img src={git} alt="Github" />
        <a href={connectLinkGit} target="_blank">
          <button>Connect</button>
        </a>
        </div>
      </div>

      {/* Hàng 2 */}
      <div className="square-box">
        <div className="title">TELEGRAM</div>
        <div className="content">
        <img src={tele} alt="Telegram" />
        <a href={connectLinkTele} target="_blank">
          <button>Connect</button>
        </a>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default SectionWrapper(About, "about");
