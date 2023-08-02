import React from "react";
import Left from "./Left";
import Right from "./Right";

export default () => {
  return (
    <div>
      <div className="px-[20px] md:px-[40px] gap-[20px] lg:flex Column billing_head_column">
        <div className="lg:w-[70%] w-[100%]">
          <Left />
        </div>
        <div className="lg:w-[30%] w-[100%]">
          <Right />
        </div>
      </div>
    </div>
  );
};
