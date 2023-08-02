import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import React from "react";

const newest = [
  {
    id: 1,
    company: "Neftlix",
    date: "27 March 2020, at 12:30 PM",
    budget: "- $ 2,500",
    benifet: false,
  },
  {
    id: 2,
    company: "Apple",
    date: "27 March 2020, at 04:30 AM",
    budget: "+ $ 2,000",
    benifet: true,
  },
];

const yesterday = [
  {
    id: 1,
    company: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    budget: "+ $ 750",
    benifet: true,
  },
  {
    id: 2,
    company: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    budget: "+ $ 1,000",
    benifet: true,
  },
  {
    id: 3,
    company: "Creative Tim",
    date: "26 March 2020, at 08:30 AM",
    budget: "+ $ 2,500",
    benifet: true,
  },
];

export default () => {
  return (
    <div>
      <div className="p-[16px] bg-white rounded-lg Shadow w-full">
        <div className="flex justify-between">
          <p className="text-[16px] font-semibold text-[#344767]">
            Your Transaction's
          </p>
          <div className="text-[14px] text-[#344767] flex items-center gap-[5px]">
            <p className="text-[18px]">
              <AiFillCalendar />
            </p>
            23 - 30 March 2020
          </div>
        </div>
        <div className="text-[12px] font-semibold uppercase text-[#344767] mt-[30px]">
          NEWEST
        </div>
        <div className="flex flex-col gap-[25px] mt-[20px]">
          {newest.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex gap-[8px] items-center">
                <div>
                  <button
                    className={`text-[${
                      item.benifet ? "#82d616" : "#ea0606"
                    }] border border-[${
                      item.benifet ? "#82d616" : "#ea0606"
                    }] p-[7px] rounded-full text-[17px]`}
                  >
                    {item.benifet ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </button>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[16px] text-[#344767] font-semibold">
                    {item.company}
                  </p>
                  <p className="text-[14px] text-[#344767]">{item.date}</p>
                </div>
              </div>
              <div
                className={`text-[${
                  item.benifet ? "#82d616" : "#ea0606"
                }] text-[14px] font-semibold`}
              >
                {item.budget}
              </div>
            </div>
          ))}
        </div>
        <div className="text-[12px] font-semibold uppercase text-[#344767] mt-[30px]">
          Yesterday
        </div>
        <div className="flex flex-col gap-[25px] mt-[20px]">
          {yesterday.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex gap-[8px] items-center">
                <div>
                  <button
                    className={`text-[${
                      item.benifet ? "#82d616" : "#ea0606"
                    }] border border-[${
                      item.benifet ? "#82d616" : "#ea0606"
                    }] p-[7px] rounded-full text-[17px]`}
                  >
                    {item.benifet ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </button>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[16px] text-[#344767] font-semibold">
                    {item.company}
                  </p>
                  <p className="text-[14px] text-[#344767]">{item.date}</p>
                </div>
              </div>
              <div
                className={`text-[${
                  item.benifet ? "#82d616" : "#ea0606"
                }] text-[14px] font-semibold`}
              >
                {item.budget}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
