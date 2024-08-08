import React from "react";
import { ButtonProps } from "../types/Types";
import { FaMicrophoneAlt } from "react-icons/fa";

export const Button: React.FC<ButtonProps> = ({ isOnPress, setIsOnPress }) => {
  return (
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
  );
};
