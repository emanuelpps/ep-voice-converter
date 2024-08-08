import React, { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import Title from "../../components/Title";

const Home: React.FC = () => {
  const [isOnPress, setIsOnPress] = useState(false);
  return (
    <div className="bg-gray-800 h-screen flex flex-col w-full justify-center items-center">
      <Title title="Presiona y toca" />
      <div
        id="pressTotalk-container"
        className="flex w-full justify-center items-center mt-5"
      >

      </div>
      <div id="text-results" className="mt-10">
        <textarea className="w-[400px] h-[200px] rounded-md" />
      </div>
    </div>
  );
};

export default Home;
