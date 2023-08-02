import React from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import Img from "../../../assets/img/team-2.jpg";
import Img1 from "../../../assets/img/small-logos/logo-spotify.svg";

export default () => {
  return (
    <div className="p-[24px] w-[300px] flex flex-col gap-[20px] bg-white transition-all rounded-lg Shadow absolute right-[1px] z-[35] ">
      <div className="flex items-center gap-[10px]">
        <div>
          <img src={Img} className="w-[36px] rounded-lg" />
        </div>
        <div>
          <p className="text-[#344767] text-[14px] font-semibold">
            New message from Laur
          </p>
          <p className="text-[#8392AB] text-[12px] font-medium flex items-center gap-[5px]">
            <span className="text-[16px]">
              <AiFillClockCircle />
            </span>
            13 minutes ago
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div>
          <img
            src={Img1}
            className="w-[36px] rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
            }}
          />
        </div>
        <div>
          <p className="text-[#344767] text-[14px] font-semibold">
            New albom by Travis Scott
          </p>
          <p className="text-[#8392AB] text-[12px] font-medium flex items-center gap-[5px]">
            <span className="text-[16px]">
              <AiFillClockCircle />
            </span>
            1 day ago
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div
          className="rounded-lg p-[7px]"
          style={{
            backgroundImage:
              "linear-gradient(310deg, #627594 0%, #A8B8D8 100%)",
          }}
        >
          <p className="text-[20px] text-[#fff]">
            <AiFillCreditCard />
          </p>
        </div>
        <div>
          <p className="text-[#344767] text-[14px] font-semibold">
            Payment succesfully completed
          </p>
          <p className="text-[#8392AB] text-[12px] font-medium flex items-center gap-[5px]">
            <span className="text-[16px]">
              <AiFillClockCircle />
            </span>
            2 days ago
          </p>
        </div>
      </div>
    </div>
  );
};
