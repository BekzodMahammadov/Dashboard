import { IoIosCloseCircleOutline } from "react-icons/io";
import React from "react";
import { useDispatch } from "react-redux";
import { navTheme, themeChange } from "../../redux/action";
import UnChecked from "../Switches/UnChecked";

export default ({ func }) => {
  const theme = [
    {
      name: "pink",
      value: "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
    },
    {
      name: "black",
      value: "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
    },
    {
      name: "blue",
      value: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
    },
    {
      name: "green",
      value: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
    },
    {
      name: "orange",
      value: "linear-gradient(310deg, #f53939 0%, #fbcf33 100%)",
    },
    {
      name: "red",
      value: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)",
    },
  ];

  const data = [
    {
      name: "white",
      value: "#fff",
    },
    {
      name: "transparent",
      value: "#F8F9FA",
    },
  ];

  const dispatch = useDispatch();
  return (
    <div>
      <div className="px-[30px] py-[50px] Shadow z-30 top-0 bg-white right-0 h-screen fixed">
        <div className="flex justify-end">
          <button onClick={func} className="text-[22px]">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div>
          <p className="text-[20px] text-[#344767] font-semibold">
            Soft UI Configurator
          </p>
          <p className="text-[16px] text-[#67748e]">
            See our dashboard options.
          </p>
        </div>
        <div className="mt-[30px]">
          <div className="text-[16px] text-[#344767] font-semibold">
            Sidebar Colors
          </div>
          <div className="flex gap-[7px] items-center mt-[5px]">
            {theme.map((item, ind) => (
              <div
                onClick={() => {
                  dispatch(themeChange(item.name));
                }}
                className={`w-[23px] h-[23px] rounded-full cursor-pointer`}
                style={{ backgroundImage: item.value }}
                key={ind + 1}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-[30px]">
          <div className="text-[16px] text-[#344767] font-semibold">
            Sidenav Type
          </div>
          <div className="text-[14px] text-[#67748e]">
            Choose between 2 different sidenav types
          </div>
          <div className="flex gap-2 mt-[8px]">
            {data.map((item) => (
              <button
                onClick={() => {
                  dispatch(navTheme(item.name));
                }}
                className="text-[16px] uppercase w-[150px] h-[40px] rounded-lg text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mt-[30px] ">
            <div className="text-[16px] text-[#344767] font-semibold">
              Navbar fixed
            </div>
            <div>
              <UnChecked />
            </div>
          </div>
          <div className="mt-[30px]">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
              }}
              className="w-full transition-all hover:scale-105 h-[40px] rounded-lg text-white text-[14px] uppercase"
            >
              free download
            </button>
          </div>
          <div className="mt-[20px]">
            <button className="w-full border border-[#344767] transition-all hover:scale-105 h-[40px] rounded-lg text-[#344767] text-[14px] uppercase">
              view documentation
            </button>
          </div>
          <div className="text-[16px] text-[#344767] mt-[20px] text-center">
            Star
          </div>
          <div className="mt-[15px]">
            <div className="text-[16px] text-[#344767] text-center font-semibold">
              Thank you for sharing!
            </div>
            <div className="flex justify-center items-center gap-[8px]">
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
                }}
                className="text-[14px] text-white uppercase font-semibold w-[80px] h-[40px] rounded-lg"
              >
                Tweet
              </button>
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
                }}
                className="text-[14px] text-white uppercase font-semibold w-[80px] h-[40px] rounded-lg"
              >
                share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
