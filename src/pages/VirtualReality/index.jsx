import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { BiPlay } from "react-icons/bi";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import React from "react";
import Img from "../../assets/img/team-1.jpg";
import Img2 from "../../assets/img/team-2.jpg";
import Img3 from "../../assets/img/team-3.jpg";
import Img4 from "../../assets/img/team-4.jpg";
import Sun from "../../assets/img/small-logos/icon-sun-cloud.png";
import Footer from "../../components/Footer";

export default () => {
  return (
    <div className="px-[20px] ">
      <div className="virtual_reality rounded-2xl flex justify-center items-center">
        <div className="flex flex-col gap-[20px] w-[500px]">
          <div className="item flex flex-col md:flex md:flex-row gap-[20px]">
            <div className="flex justify-center md:justify-start">
              <div className="flex flex-row md:flex md:flex-col gap-[8px] text-[16px] text-[#344767]">
                <img src={Img} alt="" className="w-[35px] rounded-lg" />
                <div className="p-[10px] rounded-lg bg-[#fff]">
                  <AiOutlineHome />
                </div>
                <div className="p-[10px] rounded-lg bg-[#fff]">
                  <BiSearch />
                </div>
                <div className="p-[10px] rounded-lg bg-[#fff]">
                  <BiDotsHorizontalRounded />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[40px] md:gap-[100px] px-[20px]">
              <div className="text-[40px] md:text-[60px] text-[#344767] md:mt-[-80px]">
                <p className="font-semibold">28°C</p>
                <p className="text-[16px] uppercase text-[#344767] font-semibold">
                  cloudy
                </p>
              </div>
              <div>
                <img src={Sun} className="w-[160px]" alt="" />
              </div>
            </div>
          </div>
          <div className="item flex flex-col px-[20px] md:ml-[40px] md:mt-[-60px] gap-[20px] md:flex-row">
            <div className="bg-[#fff] rounded-lg p-[16px] w-full text-[16px] flex flex-col gap-[15px] font-semibold text-[#344767]">
              <div className="flex gap-[20px]">
                <div>08:00</div>
                <div>
                  <div>Synk up with Mark</div>
                  <div className="text-[#8392AB] font-normal">Hangouts</div>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div>09:00</div>
                <div>
                  <div>Gym</div>
                  <div className="text-[#8392AB] font-normal">World class</div>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div>11:00</div>
                <div>
                  <div>Design Review</div>
                  <div className="text-[#8392AB] font-normal">Zoom</div>
                </div>
              </div>
              <div className="text-[#cb0c9f] flex justify-center">
                <BiChevronDown />
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
                }}
                className="p-[16px] w-full rounded-lg text-[#fff]"
              >
                <div className="flex  justify-between">
                  <div className="text-[16px]  text-semibold">To Do</div>
                  <div className="mt-[-15px]">
                    <div className="text-[40px] font-bold flex justify-end">
                      7
                    </div>
                    <div className="text-[#fff]">items</div>
                  </div>
                </div>
                <div className="text-[16px]">
                  Shopping <br /> Meeting
                </div>
                <div className="text-[20px] text-[#fff] flex justify-center">
                  <BiChevronDown />
                </div>
              </div>
              <div className="rounded-lg p-[16px] w-full bg-[#fff] flex  justify-between text-[#67748e]">
                <div>Emails(21)</div>
                <div>Check</div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] text-[#fff]">
              <div className="vr_curved_bg  rounded-lg">
                <div className="vr_curved_opacity p-[16px]">
                  <div className="text-[20px] font-semibold">
                    Some king of <br /> Blues
                  </div>
                  <div className="text-[16px]">Deftones</div>
                  <div className="flex gap-[5px] text-[20px] items-center mt-[30px]">
                    <button className="p-[8px] border border-[#fff] rounded-full">
                      <TbPlayerTrackPrevFilled />
                    </button>
                    <button className="p-[8px] border border-[#fff] rounded-full">
                      <BiPlay />
                    </button>
                    <button className="p-[8px] border border-[#fff] rounded-full">
                      <TbPlayerTrackNextFilled />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff] rounded-lg p-[16px] flex justify-between items-center">
                <div className="text-[16px] text-[#67748e]">Messages</div>
                <div className="flex flex-row md:flex-col md:gap-[15px]">
                  <div className="flex items-center ">
                    <img src={Img} alt="" className="w-[36px] rounded-full" />
                    <img
                      src={Img2}
                      alt=""
                      className="w-[36px] ml-[-15px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      src={Img3}
                      alt=""
                      className="w-[36px] ml-[-15px] rounded-full"
                    />
                    <img
                      src={Img4}
                      alt=""
                      className="w-[36px] ml-[-15px]  rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
