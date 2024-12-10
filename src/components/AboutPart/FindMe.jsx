import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function FindMe() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center text-3xl font-bold mb-4">Find Me on</h1>
      <h1 className="text-center text-xl font-bold mb-8">
        Feel free to <i><b className="text-red-500">contact</b></i> me
      </h1>
      <div className="flex justify-center items-center space-x-7">
        <a href="https://github.com/imguna2218" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-red-500 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]" />
        </a>
        <a href="mailto:gunasekharparisa2218@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="text-2xl hover:text-red-500 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]" />
        </a>
        <a href="https://www.linkedin.com/in/guna-sekhar-parisa-510447317/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-red-500 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]" />
        </a>
        <a href="https://www.instagram.com/imguna2218" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="text-2xl hover:text-red-500 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]" />
        </a>
        <a href="https://www.leetcode.com/u/Guna_sekhar_parisa">
          <SiLeetcode className="text-2xl hover:text-red-500 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]" />
        </a>
      </div>
    </div>
  );
}

export default FindMe;
