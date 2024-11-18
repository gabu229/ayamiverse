import Image from "next/image";
import { Anton } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import TextLink from "../misc/TextLink";

const fontAnton = Anton({ subsets: ["latin"], weight: "400" });

const MainFooter = () => {
  return (
    <footer className="w-full mt-36 px-2 md:px-16 bg-white/80">
      <div className="w-[120vw] overflow-hidden mx-auto ms-[-10%] my-10">
        <Image
          src="/images/torn-paper.png"
          className="w-full h-14"
          alt="Torn page"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row min-h-[55vh]">
        <div className="order-last lg:order-first w-full max-h-[30vh] md:max-h-[50vh] overflow-hidden md:border-t lg:border-none">
          <Image
            src="/characters/a16.jpg"
            className="w-full h-auto -mt-24 md:-mt-32 blend-image"
            alt="Footer Image"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-full md:flex">
          <div className="w-full min-h-[50vh] lg:border-l md:px-5 flex flex-col justify-between">
            <div className="w-full relative mb-10">
              <div className="relative w-auto bg-[var(--straw)] border-2 py-1 px-2 mb-3 -skew-x-12">
                <p
                  className={`${fontAnton.className} text-lg w-auto inline-block`}
                >
                  Brand
                </p>
              </div>
              <div className="">
                <ul className="list-image-none flex flex-col gap-2 ps-3">
                  <li>
                    <TextLink url="/mint" text={"Mint"} />
                  </li>
                  <li>
                    <TextLink url="/whitepaper" text={"Whitepaper"} />
                  </li>
                  <li>
                    <TextLink text={"Collection"} />
                  </li>
                  <li>
                    <TextLink text={"Team"} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full relative mb-10">
              <div className="relative w-auto bg-[var(--straw)] border-2 py-1 px-2 mb-3 -skew-x-12">
                <p className={`${fontAnton.className} text-lg w-auto inline-block`}>
                  Communities
                </p>
              </div>
              <div className="">
                <ul className="list-image-none flex flex-col gap-2 ps-3">
                  <li>
                    <TextLink text={"Aniko DAO"} />
                  </li>
                  <li>
                    <TextLink text={"Kakutse DAO"} />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full min-h-[40vh] md:border-l md:px-5 flex flex-col justify-between">
            <div className="w-full relative mb-10">
              <div className="relative w-auto bg-[var(--straw)] border-2 py-1 px-2 mb-3 -skew-x-12">
                <p className={`${fontAnton.className} text-lg w-auto inline-block`}>
                  Social media
                </p>
              </div>
              <div className="">
                <ul className="list-image-none flex flex-col gap-2 ps-3">
                  <li>
                    <TextLink text={"Discord"} />
                  </li>
                  <li>
                    <TextLink text={"X"} />
                  </li>
                  <li>
                    <TextLink text={"Opensea"} />
                  </li>
                  <li>
                    <TextLink text={"Twitch"} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:min-h-[150px] mb:mb-10">
              <h1 className={`${fontAnton.className} max-w-[550px] text-5xl`}>
                AYAMIVERSE
                <span className="small ms-1 font-sans">
                  <sup>&trade;</sup>
                </span>
              </h1>
              <p>&copy; 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
