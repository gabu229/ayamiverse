import { Anton } from "next/font/google";
import Image from "next/image";

const TimerCard = ({
  title = "Mint Phase",
  days = "00",
  hours = "00",
  minutes = "00",
  seconds = "00",
  message = "Eligible",
  status = true,
  fontAnton = {}
}) => {
  return (
    <>
      <div
        className={`relative w-full min-h-[25vh] md:min-h-[28vh] ${
          status ? "" : "opacity-60"
        }`}
      >
        <Image
          src="/images/taped-paper-landscaped-sm.png"
          width={200}
          height={200}
          alt="bg"
          className="absolute w-full h-full -skew-y-6 md:-skew-y-2 -z-10"
        />
        <div className="w-full p-12 md:p-12">
          <p
            className={`${fontAnton.className} w-100 text-sm sm:text-lg flex justify-between -skew-x-6`}
          >
            <span>{title}</span>
          </p>
          <p
            className={`${fontAnton.className} w-100 my-2 max-w-[300px] text-2xl md:text-4xl xl:text-5xl flex justify-between`}
          >
            <span>{days}</span>
            <span>:</span>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </p>
          <p
            className={`w-100 my-2 px-3 md:text-lg flex justify-end italic ${
              status ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>{message}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TimerCard;
