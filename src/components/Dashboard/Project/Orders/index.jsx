import { BsCashCoin } from "react-icons/bs";
import { RiKey2Fill } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";
const data = [
  {
    id: 1,
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    icon: <AiFillBell />,
    color: "#82d616",
  },
  {
    id: 2,
    title: "New order #1832412",
    time: "21 DEC 11 PM",
    icon: <AiFillHtml5 />,
    color: "#ea0606",
  },
  {
    id: 3,
    title: "Server payments for April",
    time: "21 DEC 9:34 PM",
    icon: <HiShoppingCart />,
    color: "#17c1e8",
  },
  {
    id: 4,
    title: "New card added for order #4395133",
    time: "20 DEC 2:20 AM",
    icon: <AiFillCreditCard />,
    color: "#fbcf33",
  },
  {
    id: 5,
    title: "Unlock packages for development",
    time: "18 DEC 4:54 AM",
    icon: <RiKey2Fill />,
    color: "#cb0c9f",
  },
  {
    id: 1,
    title: "New order #9583120",
    time: "17 DEC",
    icon: <BsCashCoin />,
    color: "#344767",
  },
];

export default () => {
  return (
    <div>
      <div className="p-[16px] w-full h-auto bg-[#fff] rounded-lg Shadow">
        <div className="text-[16px] text-[#344767] font-semibold">
          Orders overview
        </div>
        <div className="text-[14px] text-[#344767] flex items-center">
          <div className="text-[22px] font-bold text-[#82d616]">
            <AiOutlineArrowUp />
          </div>
          <div>24% this month</div>
        </div>
        <div className="xl:mt-[35px] lg:mt-[20px] flex flex-col gap-[20px] mt-[30px] lg:gap-[15px] xl:gap-[20px]">
          {data.map((item) => (
            <div key={item.id} className="flex gap-[16px]">
              <div className="text-[16px]" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div>
                <p className="text-[#344767] text-[14px] font-semibold">
                  {item.title}
                </p>
                <p className="text-[#67748e] text-[12px]">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
