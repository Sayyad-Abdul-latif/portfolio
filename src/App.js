//import logo from "./logo.svg";
//import { AiOutlineBars } from "react-icons/ai";
// import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineCalendar } from "react-icons/ai";

function App() {
  // const [prof, setprof] = useState("Programmer");
   
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="custom-shape-divider-top-1666975312">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Navbar />
        <label htmlFor="click">
        <div className="intro">
          <h1 className="hii">Hi,</h1>
          <h1 className="introd">I am Sayyad Abdul Latif.</h1>
        </div>
        </label>
        <div className="profile-sec-1">
          <img
            className="profile-pic"
            alt="please wait"
            data-aos="fade-right"
            src={require("./images/profile-pic.png")}
          />
          <div className="profile-obj" data-aos="fade-left">
            <h1>CAREER OBJECTIVE</h1>
            <p>
              Self-motivated, highly passionate, and hardworking fresher looking
              for an opportunity to work in a challenging organization to
              utilize my skills and knowledge to work for the organization's
              growth.
            </p>
          </div>
        </div>

        <div className="profile-sec-2">
          <h1>EDUCATION</h1>
          <div className="education">
            <span className="btech" data-aos="fade-left">
              <h2>B.TECH</h2>
              <h3>Raghu Engineering College</h3>
              <h5>2019 - 2023</h5>
              <h4>Electronics and communication</h4>
              <p>Grade - 8.4(present)</p>
            </span>
            <span className="twelve" data-aos="fade-down">
              <h2>12th</h2>
              <h3>Sri Chaitanya College</h3>
              <h5>2017 - 2019</h5>
              <h4>Maths, Physis and Chemistry</h4>
              <p>Grade - 9.6</p>
            </span>
            <span className="ten" data-aos="fade-right">
              <h2>10th</h2>
              <h3>Viswateja School</h3>
              <h5>2016 - 2017</h5>
              <h4>General Studies</h4>
              <p>Grade - 9.7</p>
            </span>
          </div>
        </div>
        <div className="profile-sec-3">
          <h1>EXPERIENCE</h1>
          <div className="company-desc" data-aos="fade-up">
            <img
              className="comapy-pic"
              width={40}
              height={40}
              alt="please wait"
              src={require("./images/company-logo.webp")}
            />
            <h2>Spatio Zest</h2>
            <h4>Data Analyst</h4>
            <div>
              <div className="calendar-icon">
                <AiOutlineCalendar />
              </div>
              <h4>6 Jan 2022 - 6 Mar 2022</h4>
            </div>
            <p>
              Worked on python programming language. Got to know about 2 to 3
              python modules like pandas, beautiful soap etc. Done web scraping
              of a few websites like Wikipedia and company websites. Extracted
              tables and other contents from webpages
            </p>
          </div>
        </div>
        <div className="profile-sec-4">
          <h1 className="skills">SKILLS</h1>
          <h1 className="lang">LANGUAGES</h1>
          <div className="languages">
            <div className="python" data-aos="fade-left">
              <img
                className="py"
                alt="please wait"
                src={require("./images/python.png")}
              />
              <h3>Python</h3>
            </div>
            <div className="java" data-aos="fade-up">
              <img
                className="java-pic"
                alt="please wait"
                src={require("./images/java.png")}
              />
              <h3>Java</h3>
            </div>
            <div className="javascript" data-aos="fade-right">
              <img
                className="js"
                alt="please wait"
                src={require("./images/javascript.png")}
              />
              <h3>Javascript</h3>
            </div>
          </div>
          <h1 className="lang">FRONTEND</h1>
          <div className="web-languages">
            <div className="html" data-aos="fade-left">
              <img
                className="html-pic"
                alt="please wait"
                src={require("./images/html.png")}
              />
              <h3>HTML</h3>
            </div>
            <div className="css" data-aos="fade-down">
              <img
                className="css-pic"
                alt="please wait"
                src={require("./images/css.png")}
              />
              <h3>CSS</h3>
            </div>
            <div className="react" data-aos="fade-right">
              <img
                className="react-pic"
                alt="please wait"
                src={require("./images/react.png")}
              />
              <h3>React</h3>
            </div>
          </div>
          <div className="data-tech">
            <div>
              <h1 className="lang">DATABASE</h1>
              <div className="database">
                <div className="mysql" data-aos="fade-right">
                  <img
                    className="mysql-pic"
                    alt="please wait"
                    src={require("./images/mysql.png")}
                  />
                  <h3>MY SQL</h3>
                </div>
              </div>
            </div>
            <div>
              <h1 className="lang">TECHNIQUE</h1>
              <div className="technique">
                <div className="dsa" data-aos="fade-left">
                  <img
                    className="dsa-pic"
                    alt="please wait"
                    src={require("./images/dsa.png")}
                  />
                  <h3>DSA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-sec-5">
          <h1 className="pro">PROJECTS</h1>
          <div className="projects">
            <div className="project-1" data-aos = "fade-right">
              <h2>Blind Stick</h2>
               <img
              className="comapy-pic"
              width={40}
              height={40}
              alt="please wait"
              src={require("./images/Blind-stick.png")}
            />
              <p>
                  This Project helps
                   blind people to identify an object 
                   10 meters ahead
                 </p>
                 <a href="https://github.com/Sayyad-Abdul-latif/BLIND-STICK" style={{color:"blueviolet"}}>Click here</a>
            </div>
            
            <div className="project-2" data-aos = "fade-down">
              <h2>Recipe Web</h2>
               <img
              className="comapy-pic"
              width={40}
              height={40}
              alt="please wait"
              src={require("./images/recipe.png")}
            />
              <p>
                  This Web App contains the recipes of different cuisines and foods
                 </p>
                 <a href="https://sayyad-abdul-latif.github.io/recipe-app/" style={{color:"blueviolet"}}>Click here</a>

            </div>
          
            <div className="project-3" data-aos = "fade-left">
              <h2>Calculator</h2>
               <img
              className="comapy-pic"
              width={40}
              height={40}
              alt="please wait"
              src={require("./images/calculator.png")}
            />
              <p>
                  This Web App is a Calculator, which helps everyone to perform arithmetic operations
                 </p>
                 <a href="https://sayyad-abdul-latif.github.io/calculator/" style={{color:"blueviolet"}}>Click here</a>

            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
