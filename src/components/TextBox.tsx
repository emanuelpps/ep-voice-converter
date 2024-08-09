import React from "react";
import { TextBoxProps } from "../types/Types";

export const TextBox: React.FC<TextBoxProps> = ({
  textRecorded,
  setTextRecorded,
}) => {
  return (
    <div
      id="text-results"
      className="mt-10 w-full flex justify-center items-center "
    >
      <textarea
        className="w-[85%] h-[200px] rounded-md"
        value={textRecorded}
      />
    </div>
  );
};
