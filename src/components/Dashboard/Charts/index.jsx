import { AiOutlineArrowUp } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdBackupTable } from "react-icons/md";
import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const data = [
  {
    id: 1,
    title: "Users",
    num: "36K",
    icon: <MdBackupTable />,
    width: "60%",
    bgColor: "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
  },
  {
    id: 2,
    title: "Clicks",
    num: "2M",
    icon: <BsRocketTakeoffFill />,
    width: "85%",
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 3,
    title: "Sales",
    num: "435$",
    icon: <BsFillCreditCardFill />,
    width: "25%",
    bgColor: "linear-gradient(310deg, #f53939 0%, #fbcf33 100%)",
  },
  {
    id: 4,
    title: "Items",
    num: "43",
    icon: <RiSettings5Fill />,
    width: "40%",
    bgColor: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)",
  },
];

export default () => {
  return (
    <div>
      <div className="dashboard_charts pt-[20px] Column lg:flex lg:justify-between gap-[20px] px-[20px] md:px-[40px]">
        <div className="p-[16px] lg:w-[50%] w-full bg-[#fff] rounded-lg Shadow">
          <div
            className="w-full h-[200px] pt-[30px] rounded-lg "
            style={{
              backgroundImage:
                "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
            }}
          >
            <BarChart />
            <canvas id="chart-bars" class="chart-canvas" height="170"></canvas>
          </div>
          <div className="text-[#344767] text-[16px] font-semibold">
            Active Users
          </div>
          <div className="text-[#67748e] text-[14px]">
            (+23%) than last week
          </div>
          <div className="flex justify-between mt-[20px]">
            {data.map((item) => (
              <div key={item.id}>
                <div className="flex gap-2 items-center">
                  <div
                    className={`p-2 rounded-lg text-[#fff]`}
                    style={{ backgroundImage: item.bgColor }}
                  >
                    {item.icon}
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className="mt-[15px]">
                  <div className="text-[24px] font-semibold text-[#344767]">
                    {item.num}
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-full h-[7px] mt-[5px] relative">
                    <span
                      className="absolute bg-[#344767] h-full rounded-full"
                      style={{ width: item.width }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-[16px] lg:w-[50%] w-full bg-[#fff] rounded-lg Shadow">
          <div className="text-[16px] text-[#344767] font-semibold">
            Sales Overview
          </div>
          <div className="flex items-center">
            <p className="text-[16px] text-[#82d616]">
              <AiOutlineArrowUp />
            </p>
            <p className="text-[14px] font-medium">4% more in 2021</p>
          </div>
          <div className="w-full h-[300px] mt-[20px]">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};
