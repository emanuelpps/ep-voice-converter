import React, { useState } from "react";
import Title from "../../components/Title";
import { Button } from "../../components/Button";
import { TextBox } from "../../components/TextBox";

const Home: React.FC = () => {
  const [isOnPress, setIsOnPress] = useState(false);
  const [textRecorded, setTextRecorded] = useState("");
  return (
    <div className="bg-gray-800 h-screen flex flex-col w-full justify-center items-center">
      <Title title="Presiona y Graba" />
      <Button isOnPress={isOnPress} setIsOnPress={setIsOnPress} />
      <TextBox textRecorded={textRecorded} setTextRecorded={setTextRecorded}/>
    </div>
  );
};

export default Home;
