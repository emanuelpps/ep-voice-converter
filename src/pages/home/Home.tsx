import React, { useState } from "react";
import Title from "../../components/Title";
import { Button } from "../../components/Button";

const Home: React.FC = () => {
  const [isOnPress, setIsOnPress] = useState(false);
  return (
    <div className="bg-gray-800 h-screen flex flex-col w-full justify-center items-center">
      <Title title="Presiona y toca" />
      <Button isOnPress={isOnPress} setIsOnPress={setIsOnPress} />
      <div id="text-results" className="mt-10">
        <textarea className="w-[400px] h-[200px] rounded-md" />
      </div>
    </div>
  );
};

export default Home;
