import React from "react";

export default (props) => {
  return (
    <div>
      <div className="dashboard_begin_card Shadow p-[16px] bg-white rounded-lg flex justify-between items-center mx-auto w-full">
        <div>
          <p className="text-[14px] text-[#67748e]">{props.title}</p>
          <div className="flex gap-[7px] items-center">
            <p className="text-[#344767] text-[20px] font-bold">
              {props.price}
            </p>
            <p
              style={{ color: props.color }}
              className="text-[14px] font-semibold"
            >
              {props.discount}
            </p>
          </div>
        </div>
        <div className="w-[48px] rounded-lg linear-gradient h-[48px] flex items-center justify-center text-[20px] text-[#fff]">
          {props.icon}
        </div>
      </div>
    </div>
  );
};
