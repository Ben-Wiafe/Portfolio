import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
import Typical from "react-typical";

export default function About() {
  return (
    <div className="mt-20 mx-auto max-w-4xl">
      <p className=" text-2xl  md:text-4xl font-bold text-center animate-pulse">
        Hey 👋
      </p>
      <p className=" text-base text-gray-800 leading-relaxed sm:text-xl  mt-4 text-center">
        I am a passionate 
        <Typical
          loop={Infinity}
          wrapper="a"
          steps={[
            " UI designer 😎",
            2000,
            " fullstack developer 🤕",
            2000,
            " content creator 😏",
            2000,
            " freelancer🤓",
            2000,
            " Open sourcer👨‍🦱",
            2000,
            " friend👉👨‍👩‍👦",
            2000,
            " son👨‍👦",
            2000,
          ]}
        />
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-blue-500 text-3xl" />
        </div>
      </ScrollIntoView>
    </div>
  );
}
