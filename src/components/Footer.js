import React from "react";
import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="py-5 border-t-3/2 ">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center" mt-4>
            <p className="mb-4">Created with <span className="mr-2 " role='link' aria-label="heart">💚 by</span>
           <a className="text-green-700 font-semibold hover:underline" href="mailto:azay.genius8@gmail.com">Bernard Wiafe </a> 
            </p>
      </div>
    </div>
  );
}
