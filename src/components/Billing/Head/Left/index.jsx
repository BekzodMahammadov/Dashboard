import { BiWifi } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { ImPaypal } from "react-icons/im";
import { HiOutlineBuildingLibrary } from "react-icons/hi";
import React from "react";
import Img from "../../../../assets/img/logos/mastercard.png";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Belong Interactive",
    company: "Salary",
    budget: "+$2000",
    icon: <HiOfficeBuilding />,
  },
  {
    id: 2,
    title: "Freelance Payment",
    company: "Paypal",
    budget: "$455.00",
    icon: <ImPaypal />,
  },
];

export default () => {
  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className=" xl:flex xl:justify-between gap-[20px] curved_column">
          <div className="curved_bg z-10 w-full h-[230px] rounded-2xl  ">
            <div className="bgColor w-full h-full z-20 rounded-2xl">
              <div className="py-8 px-5 z-10 flex flex-col gap-[30px]">
                <div className="text-[#fff] text-[25px]">
                  <BiWifi />
                </div>
                <h1 className="text-white font-semibold text-[20px]">
                  4562 1122 4594 7852
                </h1>
                <div className="flex justify-between  items-end">
                  <div className="flex gap-[30px]">
                    <div>
                      <p className="text-[14px] text-[#fff] ">Card Holder</p>
                      <p className="text-[16px] text-[#fff] font-medium">
                        Jack Peterson
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#fff] ">Expires</p>
                      <p className="text-[16px] text-[#fff] font-medium">
                        11/22
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={Img} className="w-[74px] xl:w-[40px]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-[20px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto bg-white Shadow rounded-lg p-[16px] flex flex-col items-center"
              >
                <div
                  className="w-[64px] h-[64px] rounded-lg flex justify-center items-center text-[22px] text-white "
                  style={{
                    backgroundImage:
                      "linear-gradient(310deg, #7928CA 0%, #FF0080 100%",
                  }}
                >
                  {item.icon}
                </div>
                <div className="mt-[10px] text-[16px] text-[#344767] font-medium">
                  {item.company}
                </div>

                <div className="mt-[10px] text-[12px] text-[#67748e] w-[120px] flex justify-center">
                  <p>{item.title}</p>
                </div>
                <div className="mt-[20px] text-[#344767] text-[20px] font-semibold">
                  {item.budget}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Card />
        </div>
      </div>
    </div>
  );
};
