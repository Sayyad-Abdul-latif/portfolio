import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import PropTypes from "prop-types";
export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <nav className="nav-bar">
      <div className="logo" data-aos="fade-up">
        {" "}
        SAYYAD ABDUL LATIF
      </div>
      <label htmlFor="click" className="menu-btn">
        <AiOutlineBars />
      </label>
      <input type="checkbox" id="click"></input>
      <ul>
        <li>
          <a
            href="https://drive.google.com/file/d/1rzdvW-KhZQ8uDwTfhjt4Dmn2sTepKqXN/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/SdAbdullatif1"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sayyad-abdul-latif-4203a9243/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sayyad-Abdul-latif"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
