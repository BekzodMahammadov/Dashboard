import React from "react";
import Projects from "./Projects";
import Orders from "./Orders";

export default () => {
  return (
    <div>
      <div className="dashboard_projects Column_2 md:flex  pt-[20px] px-[20px] md:px-[40px] w-full lg:flex gap-[20px]">
        <div className="lg:w-[70%] md:w-[50%] w-full">
          <Projects />
        </div>
        <div className="lg:w-[30%] md:w-[50%] w-full">
          <Orders />
        </div>
      </div>
    </div>
  );
};
