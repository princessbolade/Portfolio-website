import React from "react";

const Contact = () => (
  <>
    <div
      id="contact"
      className="container text-center mx-auto"
      style={{ marginTop: "100px" }}
    >
      <h1 className="text-gray-300 font-bold uppercase text-4xl">
        Get in Touch
      </h1>
      <h4 className="text-white mt-5 text-2xl ">
        I am currently available to be hired and i'd love to have a chat with
        you about exciting opportunities.
      </h4>
      <button className="bg-green-700 hover:bg-green-900 outline-none text-white font-bold mt-5 py-4 px-6 border-b-2 focus:outline-none rounded-full uppercase">
        Contact me{" "}
      </button>
    </div>
  </>
);

export default Contact;
