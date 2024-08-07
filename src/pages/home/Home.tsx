import React, { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";

type ButtonProps = {
  onClick: () => void;
  isOnPress: boolean;
};

const Home: React.FC<ButtonProps> = () => {
  const [isOnPress, setIsOnPress] = useState(false);
  return (
    <div className="bg-gray-800 h-screen flex flex-col w-full justify-center items-center">
      <div
        id="text-instructions"
        className="flex justify-center items-center w-full"
      >
        <span className="text-center w-full text-white">
          Presionar y hablar
        </span>
      </div>
      <div
        id="pressTotalk-container"
        className="flex w-full justify-center items-center mt-5"
      >
        <div
          className={`${
            isOnPress ? "bg-green-500" : "bg-red-800"
          } w-[200px] h-[200px] rounded-full cursor-pointer`}
          onClick={() => setIsOnPress(!isOnPress)}
        >
          <div className="flex justify-center items-center w-full h-full">
            <FaMicrophoneAlt className="text-5xl" />
          </div>
        </div>
      </div>
      <div id="text-results" className="mt-10">
        <textarea className="w-[400px] h-[200px] rounded-md" />
      </div>
    </div>
  );
};

export default Home;
