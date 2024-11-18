import LandscapeCard from "@/components/cards/LandscapeCard";
import TimerCard from "@/components/cards/TimerCard";
import { Anton } from "next/font/google";

const fontAnton = Anton({ subsets: ["latin"], weight: "400" });

const MintPage = () => {
  return (
    <main className="flex flex-col justify-between gap-10 px-2 md:p-16 md:py-5">
      <div className="flex flex-col md:flex-row min-h-[60vh] gap-12 xl:gap-24">
        <div className="w-full order-last md:order-first">
          <div className="w-full min-h-[30vh] flex">
            <LandscapeCard font={fontAnton} showBtn={false} />
          </div>
        </div>

        <div className="w-full max-w-[400px] md:max-w-[500px] mx-auto">
          <div className="w-full">
            <h2
              className={`${fontAnton.className} text-4xl lg:text-5xl inline-block w-1/2 uppercase`}
            >
              Genesis Mint
            </h2>
          </div>

          <div className="relative w-full">
            <TimerCard
              fontAnton={fontAnton}
              title="GTD Phase"
              status={false}
              message="Not eligible"
            />
            <TimerCard
              fontAnton={fontAnton}
              title="FCFS Phase"
              message="Eligible"
            />
          </div>

          <div className="w-full px-5 md:px-12 my-5">
            <div className="w-full text-end">
              <p className="text-sm">47 / 999</p>
            </div>
            <div className="w-full bg-white/40 mb-5 -skew-x-12">
              <div className="w-3 h-3 bg-[var(--straw)]"></div>
            </div>

            <button className="w-full bg-[var(--straw)] border-2 py-2 px-2 mx-auto -skew-x-12 disabled:opacity-75" disabled>
              <p
                className={`${fontAnton.className} text-lg md:text-xl inline-block w-1/2`}
              >
                Mint (1)
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MintPage;
