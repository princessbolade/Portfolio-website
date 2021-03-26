import React from "react";
import ProfilePicture from "./image/mypicture.jpg";

const PersonalProfile = () => (
  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 animate__animated animate__slideInLeft animate__repeat-1">
      <div className="p-4 md:p-12 text-center lg:text-left ">
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${ProfilePicture})` }}
        ></div>
        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Mobolade Akinlua</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500"></div>
        <p className="pt-4 text-2xl font-bold flex items-center justify-center lg:justify-start">
          <svg
            className="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path>
          </svg>{" "}
          Software Engineer
        </p>
        <p className="pt-8 text-lg">
          I am a flexible, analytical and innovative software engineer who
          resides in Lagos,Nigeria,with a keen eye for detail , I love learning
          and building softwares which are user friendly with my profciency in
          JavaScript. Outside software engineering, I'm a part-time baby girl,I
          love to cook and I have great interest in politics.{" "}
        </p>
        <div className="pt-6 pb-4">
          <button className="bg-green-700 hover:bg-green-900 outline-none text-white font-bold py-4 px-6 border-b-2 focus:outline-none rounded-full">
            Portfolio
          </button>
        </div>
        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-around text-3xl">
          <a href="https://github.com/princessbolade">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mobolade-akinlua-711aa31a3/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/PrincessBolade_">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full h-auto lg:w-2/5">
      <img
        src={ProfilePicture}
        alt=""
        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block animate__animated animate__slideInRight animate__repeat-1"
      ></img>
    </div>
  </div>
);

export default PersonalProfile;
