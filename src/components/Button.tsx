import React from "react";

type Props = {};

export const Button: React.FC<Props> = (props: Props) => {
  return (
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
  );
};
