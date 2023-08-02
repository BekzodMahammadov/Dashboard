import { AiFillSetting } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import React from "react";
import Img from "../../../assets/img/bruce-mars.jpg";

export default () => {
  return (
    <div>
      <div className="profile_header px-[20px] md:px-[40px]">
        <div className="profile_curved_img"></div>
        <div className="px-[20px] mt-[-50px]">
          <div className="flex justify-between Column_2 p-[20px] backdrop-blur-md rounded-xl bg-[#ffffff] Shadow">
            <div className="flex items-center gap-[10px]">
              <div>
                <img src={Img} className="w-[74px] rounded-xl" alt="" />
              </div>
              <div>
                <p className="text-[20px] text-[#344767] font-semibold">
                  Alec Thompson
                </p>
                <p className="text-[14px] text-[#67748e] font-semibold">
                  CEO / Co-Founder
                </p>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="rounded-xl flex items-center gap-[7px]  bg-[#fff] p-[7px] text-[16px] text-[#344767]">
                <div className="flex items-center gap-[4px]">
                  <p className="text-[18px]">
                    <BsFillBoxFill />
                  </p>
                  App
                </div>
                <div className="flex items-center gap-[4px]">
                  <p className="text-[18px]">
                    <MdOutlineMessage />
                  </p>
                  Messages
                </div>
                <div className="flex items-center gap-[4px]">
                  <p className="text-[18px]">
                    <AiFillSetting />
                  </p>
                  App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
