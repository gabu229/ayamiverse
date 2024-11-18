"use client";

import Image from "next/image";
import "./styles.css";

const PortraitCard = ({
  artWork = "/characters/a12.jpg",
  item = "780",
  font,
}) => {
  return (
    <>
      <div
        className={`relative w-full min-w-[200px] mx-auto overflow-hidden aspect-[3/4] portraitShape`}
      >
        <Image
          src={artWork}
          width={500}
          height={500}
          alt=""
          className="relative object-cover w-auto h-full -translate-x-7"
        />
        <div className="absolute w-[20%] min-w-[3rem] max-w-[70px] bg-[var(--straw)] border-black border-l-2 h-full flex flex-col justify-end z-40 right-0 bottom-0 p-1 py-3 pe-3">
          <p className={`${font.className} text-xl lg:text-2xl`}>#{item}</p>
        </div>
      </div>
    </>
  );
};

export default PortraitCard;
