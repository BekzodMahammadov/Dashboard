import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import Img from "../../../assets/img/illustrations/rocket-white.png";

export default () => {
  return (
    <div>
      <div className="dashboard_begin_two pt-[20px] Column lg:flex lg:justify-between gap-[20px] px-[20px] md:px-[40px]">
        <div className="p-[16px] Shadow bg-[#fff] rounded-lg w-full h-auto lg:flex lg:justify-between lg:items-center Column">
          <div className="flex flex-col gap-[10px]">
            <div className="text-[16px] text-[#67748e] font-semibold">
              Built by developers
            </div>
            <div className="text-[20px] font-semibold text-[#344767]">
              Soft UI Dashboard
            </div>
            <div className="w-[273px]">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </div>
            <button className="flex begin_two_btn items-center gap-[4px] mt-[40px] text-[16xp] font-semibold text-[#67748e]">
              Read More
              <span className="arrow">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div className="linear-gradient w-full lg:w-[221px] lg:h-[240px] md:h-[500px] h-[300px] flex justify-center items-center  rounded-lg ">
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="bg-[#fff] Shadow p-[16px] w-full begin_two_card rounded-lg">
          <div className="begin_two_bgImg  z-10 w-full h-[230px] rounded-xl">
            <div className="bgColor2 w-full h-full z-20 rounded-xl">
              <div className="p-[16px] z-30">
                <h1 className="text-white font-semibold text-[20px]">
                  Work with the rockets
                </h1>
                <p className="text-white font-medium text-[18px] mt-[20px]">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <button className="flex begin_two_btn items-center gap-[4px] mt-[40px] text-[16xp] font-semibold text-[#fff]">
                  Read More
                  <span className="arrow">
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
