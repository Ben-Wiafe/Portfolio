import React from "react";
import Lion from "../assests/lion-removebg-preview.png";
import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import image from '../assests/pngtree-hud-blue-frame-streaming-background-ui-image_384004.jpg'
function Card() {
  return (
    <div className="w-full ">
    
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="animate-pulse">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={Lion}
            alt="Sketched Lion"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-800">Bernard Wiafe</p>
          <p className="text-xs sm:text-base  text-gray-600 border-b-2  pt-2 pb-4 px-5 inline-block">
            FullStack Developer/UI/UX Designer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full transition-colors"
              href="https://github.com/Ben-Wiafe?tab=repositories"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-colors"
              href="https://github.com/Ben-Wiafe?tab=repositories"
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 hover:text-white rounded-full transition-colors"
              href="https://github.com/Ben-Wiafe?tab=repositories"
            >
              <FaLinkedin />
              <span class="sr-only">Linkedin</span>
            </a>{" "}
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-green-500 hover:text-white rounded-full transition-colors"
              href="https://github.com/Ben-Wiafe?tab=repositories"
            >
              <FaWhatsapp />
              <span class="sr-only">Whatsapp</span>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
