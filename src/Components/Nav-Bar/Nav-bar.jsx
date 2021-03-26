import React from "react";

const NavBar = () => {
  return (
    <div>
      <ul class="flex mr-20 pt-8 text-white text-bold">
        <li class="ml-24 animate__animated animate__fadeInLeft animate__delay-2s ">
          <div class="flex items-center justify-end">
            <div class="w-10 border-b border-solid border-green-500"></div>
            <h1 class="ml-3 text-3xl font-bold">1</h1>
          </div>
          <div class="text-right hover:text-green-500">GET TO KNOW ME</div>
        </li>
        <li class="ml-24 animate__animated animate__fadeInLeft animate__delay-1s">
          <div class="flex items-center justify-end">
            <div class="w-10 border-b border-solid border-green-500"></div>
            <h1 class="ml-3 text-3xl font-bold">2</h1>
          </div>
          <div class="text-right hover:text-green-500">PORTFOLIO</div>
        </li>
        <li class="ml-24 animate__animated animate__fadeInLeft">
          <div class="flex items-center justify-end">
            <div class="w-10 border-b border-solid border-green-500"></div>
            <h1 class="ml-3 text-3xl font-bold">3</h1>
          </div>
          <div class="text-right hover:text-green-500">CONTACT ME</div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
