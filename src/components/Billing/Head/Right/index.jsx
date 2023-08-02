import { AiFillFilePdf } from "react-icons/ai";
import React from "react";

const data = [
  {
    id: 1,
    date: "March, 01, 2020",
    code: "#MS-415646",
    budget: "$180",
  },
  {
    id: 2,
    date: "February, 10, 2021",
    code: "#RV-126749",
    budget: "$250",
  },
  {
    id: 3,
    date: "April, 05, 2020",
    code: "#FB-212562",
    budget: "$560",
  },
  {
    id: 4,
    date: "June, 25, 2019",
    code: "#QW-103578",
    budget: "$120",
  },
  {
    id: 5,
    date: "March, 01, 2019",
    code: "#AR-803481",
    budget: "$300",
  },
];

export default () => {
  return (
    <div>
      <div className="w-full bg-white rounded-lg Shadow p-[16px] h-auto">
        <div className="flex justify-between">
          <div className="text-[#344767] text-[16px] font-semibold ">
            Invoices
          </div>
          <div>
            <button className="border border-[#cb0c9f] rounded-lg text-[#cb0c9f] font-medium uppercase text-[14px] transition-all hover:scale-105 px-[13px] py-[4px]">
              view all
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] mt-[30px]">
          {data.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div>
                <p className="text-[#344767] text-[16px] font-semibold">
                  {item.date}
                </p>
                <p className="text-[#67748e] text-[12px]">{item.code}</p>
              </div>
              <div className="flex items-center gap-[20px]">
                <p className="text-[#67748e] text-[14px]">{item.budget}</p>
                <button className="text-[16px] font-semibold text-[#344767] flex items-center uppercase">
                  <AiFillFilePdf />
                  pdf
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
