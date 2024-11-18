import LandscapeCard from "@/components/cards/LandscapeCard";
import PortraitCard from "@/components/cards/PortraitCard";
import CircularText from "@/components/misc/CircularText";
import CardSwiper from "@/components/sliders/CardSwiper";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const fontAnton = Anton({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const showcaseArts = [
    { image: "/characters/a03.jpg", item: "108" },
    { image: "/characters/a02.jpg", item: "413" },
    { image: "/characters/a11.jpg", item: "324" },
    { image: "/characters/a06.jpg", item: "249" },
    { image: "/characters/a07.jpg", item: "802" },
    { image: "/characters/a01.jpg", item: "102" },
    { image: "/characters/a13.jpg", item: "832" },
    { image: "/characters/a08.jpg", item: "283" },
    { image: "/characters/a10.jpg", item: "912" },
  ];
  const portraitCards = showcaseArts.map(({ image, item }, index) => (
    <div
      key={index}
      className="px-12 sm:px-10 lg:p-3 hover:scale-105 transition-all duration-500 overflow-visible"
    >
      <PortraitCard key={index} font={fontAnton} artWork={image} item={item} />
    </div>
  ));

  return (
    <>
      <main className="flex flex-col justify-between gap-10 p-2 md:p-16">
        <div className="flex min-h-[50dvh] justify-between items-start flex-col md:flex-row sm:gap-5">
          <div className="w-full min-h-[50vh] flex-[2] flex flex-col items-start">
            <h1
              className={`${fontAnton.className} max-w-[550px] text-6xl lg:text-8xl leading-[1.2]`}
            >
              ENGAGE, ADAPT, EVOLVE, & LEAD THE REVOLUTION
            </h1>

            <Link href="#" className="inline-block mt-1 text-link">
              <p className="ps-1 text-lg sm:text-xl flex items-center gap-2">
                JOIN A COMMUNITY{" "}
                <span className="inline">
                  <MdArrowOutward size={24} />
                </span>
              </p>
            </Link>

            <div className="relative w-full sm:flex items-end justify-end py-5 px-10 my-10 md:my-0">
              <CircularText
                text="PRICE 0.01ETH &nbsp; &nbsp; DATE TBA &nbsp; &nbsp; 999 SUPPLY &nbsp; &nbsp; "
                radius={7}
              />
            </div>
          </div>

          <div className="w-full flex-1 flex items-end justify-center">
            <div className="w-auto max-w-[400px] px-5 lg:px-0">
              <CardSwiper slides={portraitCards} />
            </div>
          </div>
        </div>

        <div className="flex min-h-[50dvh] justify-between items-stretch flex-col md:flex-row gap-10">
          <div className="w-full min-h-[30vh] flex order-last md:order-first">
            <LandscapeCard font={fontAnton} showBtn={false} />
          </div>

          <div className="w-full flex items-end justify-end pt-12 md:ps-16">
            <div className="w-auto min-h-[30vh]">
              <p
                className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-5 leading-[1.8]`}
              >
                BECOME PART OF THE STORY
              </p>
              <p className={`text-lg md:text-2xl leading-[1.8]`}>
                AYAMIVERSE is an anime-inspired Web3 experience coming soon on
                the Metaverse where you create, customize, and own
                anime-inspired characters.
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[50dvh] justify-between items-stretch flex-col md:flex-row gap-10">
          <div className="w-full min-h-[30vh] flex order-last">
            <LandscapeCard
              font={fontAnton}
              showBtn={false}
              image="/covers/a20.jpg"
            />
          </div>

          <div className="w-full flex items-end justify-end pt-12 md:ps-16">
            <div className="w-auto min-h-[30vh]">
              <p
                className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-5 leading-[1.8]`}
              >
                MINT YOUR CHARACTER, SHAPE THEIR JOURNEY
              </p>
              <p className={`text-lg md:text-2xl leading-[1.8]`}>
                Engage in quests, evolve your heroes, and be part of a
                story-driven fantasy world.
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[50dvh] justify-between items-stretch flex-col md:flex-row gap-10">
          <div className="w-full min-h-[30vh] flex order-last md:order-first">
            <LandscapeCard
              font={fontAnton}
              showBtn={false}
              image="/covers/a22.jpg"
            />
          </div>

          <div className="w-full flex items-end justify-end pt-12 md:ps-16">
            <div className="w-auto min-h-[30vh]">
              <p
                className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-5 leading-[1.8]`}
              >
                EVOLVING UNIVERSE, READY TO EXPLORE
              </p>
              <p className={`text-lg md:text-2xl leading-[1.8]`}>
                Participate in storylines, play your role in the revolution, get
                your fold ahead of the universe, unlock new traits.
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[70dvh] justify-between items-stretch flex-col md:flex-row gap-5 md:px-5 lg:px-10 xl:px-16 md:mt-24">
          <Link
            href="/story"
            className="grayscale hover:grayscale-0 md:flex-[2] bg-white/10 "
          >
            <div className="relative w-full aspect-[2/2.4] md:-skew-x-6 border-4 md:border-8 min-h-[80dvh] cursor-pointer shadow-xl overflow-hidden flex flex-col justify-end">
              <Image
                src="/covers/a30.jpg"
                width={500}
                height={500}
                alt=""
                className="absolute object-cover h-auto w-[120%] -translate-y-40 -Z-10 hover:grayscale-0"
              />
              <div className="grayscale-0 w-full z-10 bg-[var(--straw)] p-3">
                <p
                  className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-5 leading-[1.8] flex justify-between`}
                >
                  READ STORY
                  <span>
                    <IoIosArrowRoundForward size={60} />
                  </span>
                </p>
                <p className={`md:text-lg mb-5 leading-[1.8] line-clamp-3`}>
                  In the heart of Japan’s elite Mizuki Academy, an underground
                  revolution is brewing. It’s the early 2000s, and the academy’s
                  brightest young minds have split into rival factions, each
                  fighting to seize control—not just of the school, but of the
                  nation’s future. With names like The Zenith Syndicate, The
                  Iron Claw, and The Scarlet Whispers, these factions represent
                  ideals, power, and rebellion, and they’ll stop at nothing to
                  claim dominance.
                </p>
              </div>
            </div>
          </Link>

          <div className="w-full md:flex-[3] flex flex-col gap-5 md:gap-10">
            <Link
              href="/mint"
              className="grayscale hover:grayscale-0 bg-white/10 "
            >
              <div className="relative w-full md:-skew-x-6 md:ms-7 border-4 md:border-8 min-h-[37.5dvh] cursor-pointer shadow-xl overflow-hidden flex flex-col justify-end">
                <Image
                  src="/covers/a32.jpg"
                  width={500}
                  height={500}
                  alt=""
                  className="absolute top-0 object-cover h-auto w-[120%] md:-translate-y-10 -z-10 hover:grayscale-0"
                />
                <div className="grayscale-0 w-full z-10 bg-[var(--straw)] p-3">
                  <p
                    className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-1 md:mb-5 leading-[1.8] flex justify-between`}
                  >
                    MINT COMING SOON
                    <span>
                      <IoIosArrowRoundForward size={60} />
                    </span>
                  </p>
                  <p className={`md:text-lg mb-5 leading-[1.8] line-clamp-3`}>
                    Start by minting your character.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/whitepaper"
              className="grayscale hover:grayscale-0 bg-white/10 "
            >
              <div className="relative w-full md:-skew-x-6 border-4 md:border-8 min-h-[37.5dvh] cursor-pointer shadow-xl overflow-hidden flex flex-col justify-end">
                <Image
                  src="/covers/a31.jpg"
                  width={500}
                  height={500}
                  alt=""
                  className="absolute top-0 object-cover h-auto w-[120%] md:-translate-y-20 -z-10 hover:grayscale-0"
                />
                <div className="grayscale-0 w-full z-10 bg-[var(--straw)] p-3">
                  <p
                    className={`${fontAnton.className} text-3xl md:text-5xl xl:text-6xl mb-1 md:mb-5 leading-[1.8] flex justify-between`}
                  >
                    READ WHITEPAPER
                    <span>
                      <IoIosArrowRoundForward size={60} />
                    </span>
                  </p>
                  <p className={`md:text-lg mb-5 leading-[1.8] line-clamp-3`}>
                    Start by minting your character.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full min-h-[40dvh] my-14 md:my-24">
          <div className="w-full text-center">
            <p
              className={`${fontAnton.className} text-5xl lg:text-8xl mb-5 leading-[1.4] md:leading-[1.8]`}
            >
              FOR THE COMMUNITY, BY THE COMMUNITY
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
