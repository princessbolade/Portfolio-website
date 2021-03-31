import React from "react";
import DigiAjo from "../../assets/DigiAjo.png";
import Wave from "../../assets/wave.svg";
import Dezzer from "../../assets/deezer.png";

const Portfolio = () => (
  <>
    <div id="portfolio">
      <section className="px-6" style={{ marginTop: "12%" }}>
        <h2 className="text-gray-300 mb-12 text-center uppercase font-bold text-3xl">
          I'm currently Working On
        </h2>
        <div className="md:flex md:justify-between container mx-auto">
          <div className="">
            <h3
              className="text-white pt-12 text-left"
              style={{ fontSize: "2rem", margin: "0 0 2rem" }}
            >
              DIGIAJO
            </h3>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "200",
                lineHeight: "160%",
              }}
              className="text-gray-300 leading-relaxed"
            >
              DIGIAJO is a rotational savings club aimed at a group of
              individuals <br />
              to save together in a form of peer-to-peer saving. <br /> Group
              members will contribute funds into a pool regularly, <br /> and
              take turns withdrawing funds from the pool. <br />
              [Built with ReactJS, TailwindCSS]
            </p>
            <a className="text-white text-sm mb-12" href="">
              Visit DIGIAJO
            </a>
          </div>
          <div className="md:w-1/3 w-full">
            <img
              className="w-full object-cover"
              src={DigiAjo}
              alt=""
              style={{
                borderLeft: "5px solid #496c3a ",
                borderRadius: "20px 20px 20px 20px",
              }}
            />
          </div>
        </div>

        <div className="md:flex md:justify-between container mx-auto md:mt-8">
          <div>
            <h3
              className="text-white pt-12 text-left"
              style={{ fontSize: "2rem", margin: "0 0 2rem" }}
            >
              DEEZER MUSIC CLONE
            </h3>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "200",
                lineHeight: "160%",
              }}
              className="text-gray-300 leading-relaxed"
            >
              DEEZER is a music app that allows you to access the best music
              globally.
              <br />
              It has the great feautures like the feautured weekly, <br />{" "}
              Allows you to access featured playlists and the best albums.{" "}
              <br /> You can also search for and favorite your best tracks.{" "}
              <br />
              [Built with ReactJS, Ant-Design]
            </p>
            <a className="text-white text-sm mb-12" href="">
              Visit Deezer-clone
            </a>
          </div>
          <div className="md:w-1/3 w-full">
            <img
              className="w-full object-cover"
              src={Dezzer}
              alt=""
              style={{
                borderLeft: "5px solid #496c3a ",
                borderRadius: "20px 20px 20px 20px",
              }}
            />
          </div>
        </div>

        <div>
          <h3 className="text-gray-300 mt-12 font-bold text-3xl text-center">
            OTHER PROJECTS I'VE WORKED ON
          </h3>
          <div
            className="container mx-auto md:grid-cols-3"
            style={{
              display: "grid",
              gridAutoRows: "1fr",
              gridRowGap: "2rem",
              marginTop: "30px",
            }}
          >
            <div>
              <h4 className="text-white font-bold text-3xl">
                IP ADDRESS TRACKER
              </h4>
              <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left">
                A web app that shows your IP address and its exact location on
                the map. It shows the name of your internet provider and your
                time zone. It allows you to search for the information of any IP
                and its domain. <br /> [Built with HTML, TailwindCSS and
                JavaScript]
              </p>
            </div>
            <div className="md:ml-4">
              <h4 className="text-white font-bold text-3xl">
                SIMPLE REACT CALCULATOR
              </h4>
              <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
                A simple calculator for basic mathematics arithmetic operations
                and calculations easily and accurately. It can be used in
                Addition, subtraction, multiplication and division. <br />{" "}
                [Built with ReactJs,CSS]
              </p>
            </div>
            <div className="md:ml-4">
              <h4 className="text-white font-bold text-3xl">TODO-LIST GUIDE</h4>
              <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
                A simple task application that allows you to create a task, mark
                as completed,deletes and counts the number of tasks created. It
                uses the browsers local storage to store your data.
                <br /> [Built with HTML,CSS and Javascript]
              </p>
            </div>
          </div>
        </div>
        <div
          className=" container mx-auto md:grid-cols-3"
          style={{
            display: "grid",
            gridAutoRows: "1fr",
            gridRowGap: "2rem",
            marginTop: "50px",
          }}
        >
          <div>
            <h4 className="text-white font-bold text-3xl">
              ROYAL CLOTHING E-COMMERCE
            </h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left">
              A fully fledged clothing E-commerce website which enables you to
              sign up as a new user and sign in as a returning one, you cen view
              items in the store. A user can add to cart, remove from cart and
              checkout to payment process. <br /> [Built with
              ReactJs,SASS,Firebase]
            </p>
          </div>
          <div className="md:ml-4">
            <h4 className="text-white font-bold uppercase text-3xl">
              Bulb Fellowship website
            </h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
              Fellowship Website for The Bulb Africa for intending fellows and
              facilators to apply. The intending fellows can read aboout the
              various courses provided in the program and employers can hire
              engineers from the website.
              <br /> [Built with Typescript,NextJs,Tailwind-CSS]
            </p>
          </div>
          <div className="md:ml-4">
            <h4 className="text-white font-bold text-3xl">
              BULB FELLOWSHIP PORTFOLIO
            </h4>
            <p className="text-gray-300 text-lg mt-2 leading-relaxed tracking-wide text-left ">
              A simple website that shows the bio-data and little about me
              section of the first cohort The Bulb Africa. It allows you to also
              read more about the amazing cause the bulb africa is set for.
              <br /> [Built with HTML,BOOTSTRAP and Javascript]
            </p>
          </div>
        </div>

        <img src={Wave} alt="" />
      </section>
    </div>
  </>
);

export default Portfolio;
