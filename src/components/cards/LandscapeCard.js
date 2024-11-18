"use client";

import Image from "next/image";
import "./styles.css";

import { IoIosArrowRoundForward } from "react-icons/io";

const LandscapeCard = ({ font, image = "/covers/a21.jpg", showBtn = true }) => {
  return (
    <div className="relative">
      <div
        className={`relative w-full min-w-[220px] mx-auto overflow-hidden aspect-[5/3] landscapeShape`}
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          alt=""
          className="relative h-auto w-full"
        />
      </div>
      {showBtn && (
        <div className="absolute w-auto min-w-[100px] bg-[var(--straw)] border-2 flex flex-col justify-end z-40 -right-2 md:-right-7 top-[60%] py-3 px-2">
          <p className={`${font.className} md:text-lg flex gap-2`}>
            Explore Collection{" "}
            <span>
              <IoIosArrowRoundForward size={30} />
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LandscapeCard;
