import React from "react";
import { TitleProps } from "../types/Types";

const Title: React.FC<TitleProps> = ({ title }) => (
  <div
    className="flex justify-center items-center w-full"
    id="text-instructions"
  >
    <span className="w-full text-center text-white">{title}</span>
  </div>
);

export default Title;
