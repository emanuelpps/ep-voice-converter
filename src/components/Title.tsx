import React from "react";
import { Props as TitleProp } from "../types/Types";

const Title: React.FC<TitleProp> = ({ title }) => (
  <div
    className="flex justify-center items-center w-full"
    id="text-instructions"
  >
    <span className="w-full text-center text-white">{title}</span>
  </div>
);

export default Title;
