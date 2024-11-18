"use client";

import React, { useEffect, useState } from "react";
import "./circular-text.css";
import { FaEthereum } from "react-icons/fa6";

const CircularText = ({ text, radius }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(text.split(""));
  }, [text]);

  return (
    <div className="grid place-items-center w-full max-w-[120px] aspect-square rounded-full xl:me-40 lg:-translate-y-10">
      <div className="textContainer" aria-hidden="true">
        {characters.map((c, i) => (
          <span style={{ "--i": i }} key={i} className="font-semibold">
            {text}
          </span>
        ))}
      </div>

      <div className="absolute">
        <FaEthereum size={50} />
      </div>
    </div>
  );
};

export default CircularText;
