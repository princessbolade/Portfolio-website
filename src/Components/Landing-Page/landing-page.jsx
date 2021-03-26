import React from "react";
import Typical from "react-typical";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Javascript from "../../assets/js.png";
import Typescript from "../../assets/typescript.png";
import Tailwind from "../../assets/tailwind.png";
import ReactImage from "../../assets/react.png";
import Git from "../../assets/git.png";

const LandingPage = () => (
  <div className="mt-36 ml-24 flex justify-center">
    <section className="text-left">
      <strong className="text-gray-300 text-3xl uppercase">
        Hi, I'm Mobolade,
      </strong>
      <Typical
        className="text-white text-6xl mt-2 uppercase"
        steps={[
          "A Front End Engineer",
          2500,
          "A Cook",
          2500,
          "And A Fashionista.",
          2500,
        ]}
        loop={Infinity}
        wrapper="p"
      />
      <p className="text-2xl text-gray-300 pt-6 text-justify mt-4 tracking-wide leading-relaxed">
        I have been sharing my need for speed for a while, after i discovered
        how much i'd love to improve User experience in the tech space. <br /> I
        help businesses build elegant, robust and scalable software with the
        best tools.
      </p>

      <div className="mt-12">
        <span
          className="text-center text-gray-300 text-3xl  font-bold leading-loose"
          style={{ marginTop: "20px" }}
        >
          Below are the amazing technologies and frameworks I work with
        </span>
        <div className=" flex items-center justify-around text-white flex-wrap mr-24 order-5">
          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={HTML}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>HTML</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={CSS}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>CSS</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={Javascript}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>JavaScript</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={Typescript}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>TypeScript</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={Tailwind}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>Tailwind</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={ReactImage}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>React</p>
          </div>

          <div className="text-center m-8 w-16 sm:w-auto">
            <img
              src={Git}
              alt=""
              width="50px"
              className="inset-0 transform hover:skew-y-12 transition duration-300"
            />
            <p>Git</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white mt-12 font-bold text-3xl text-center">
          My work flow process
        </h3>
        <div
          className="grid-cols-3"
          style={{
            display: "grid",
            gridAutoRows: "1fr",
            gridRowGap: "2rem",
            marginTop: "30px",
          }}
        >
          <div>
            <i className="fas fa-pen text-2xl mt-4 text-green-700"></i>
            <h4 className="text-white font-bold text-3xl">Define</h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left">
              I brainstorm multiple user-friendly solutions <br /> to solve
              identified problems.
            </p>
          </div>
          <div>
            <i className="far fa-lightbulb text-red-300 mt-4 text-2xl"></i>
            <h4 className="text-white font-bold text-3xl">Ideate</h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
              I design and structure my code as to being a clean one, <br /> and
              write good logic to tackle the solution.
            </p>
          </div>
          <div style={{ marginLeft: "45px" }}>
            <i className="fas fa-clipboard-check text-2xl mt-4 text-blue-300"></i>
            <h4 className="text-white font-bold text-3xl">Implement</h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
              After successfully completing a project, <br /> Its set out for
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
