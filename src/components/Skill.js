import React from "react";
import {
  SiJavascript,
  SiFigma,
  SiJava,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import Aos from "aos";

import "aos/dist/aos.css";

export default function Skill() {
  Aos.init({
    once: false,
  });

  return (
    <div className="max-4xl mx-auto justify-center py-2" id="tech">
      <p className="text-2xl sm:text-4xl text-black text-center font-bold">
        Tech I Use
      </p>
      <div
        className="flex flex-wrap justify-center pt-3"
        data-aos="flip=down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiFigma color="orange" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            Figma
          </p>
        </div>
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiJava color="red" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            Java
          </p>
        </div>
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiJavascript color="yellow" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            Javascript
          </p>
        </div>
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiNodedotjs color="green" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            NodeJs
          </p>
        </div>
        <div
          className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52"
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 texl-xl sm:text-2xl font-semibold text-center">
            TailwindCSS
          </p>
        </div>
      </div>
    </div>
  );
}
