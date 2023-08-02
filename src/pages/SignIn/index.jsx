import { AiOutlineGithub } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillKeyFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPieChartFill } from "react-icons/bs";
import {} from "react-icons/io";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarChanger2 } from "../../redux/action";
import { Link } from "react-router-dom";
import Checked from "../../components/Switches/Checked";
import UnChecked from "../../components/Switches/UnChecked";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navbarClose = useSelector((state) => state.navbarReducer.navbarClose);
  useEffect(() => {
    navbarClose && dispatch(navbarChanger2());
    return () => dispatch(navbarChanger2());
  }, []);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="sign_in  ">
        <div className="absolute">
          <div className="fixed backdrop-blur-[100px] Shadow top-[20px] z-30  py-[13px] px-[30px] rounded-full flex justify-between items-center w-full">
            <div className="capitalize text-[14px] font-bold text-[#344767]">
              soft ui dashboard
            </div>
            <div className="text-[#344767] z-40  hidden lg:flex items-center gap-[10px]">
              <Link className="flex gap-2 items-center" to={"/"}>
                <p className="text-[16px]">
                  <BsFillPieChartFill />
                </p>
                <p className="text-[14px]">Dashboard</p>
              </Link>
              <Link className="flex gap-2 items-center" to={"/profile"}>
                <p className="text-[16px]">
                  <AiOutlineUser />
                </p>
                <p className="text-[14px]">Profile</p>
              </Link>
              <Link className="flex gap-2 items-center" to={"/signup"}>
                <p className="text-[16px]">
                  <RxAvatar />
                </p>
                <p className="text-[14px]">Sign Up</p>
              </Link>
              <Link className="flex gap-2 items-center" to={"/signin"}>
                <p className="text-[16px]">
                  <BsFillKeyFill />
                </p>
                <p className="text-[14px]">Sign In</p>
              </Link>
            </div>

            <div className="hidden lg:block">
              <button
                style={{
                  backgroundImage:
                    " linear-gradient(310deg, #141727 0%, #3A416F 100%)",
                }}
                className="w-[163px] h-[32px] rounded-full uppercase text-[#fff] font-bold text-[12px]"
              >
                free download
              </button>
            </div>
            <div className="block lg:hidden relative">
              <button
                className="text-[20px]"
                onClick={() => {
                  handleOpen();
                }}
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <div
              className={`absolute open_sign_in z-20 px-[40px] pt-[60px] pb-[20px] top-[30px] left-[0px] backdrop-blur-[100px]  rounded-[30px] Shadow ${
                !open ? "hidden" : "block"
              }`}
            >
              <div className="text-[#344767] w-full flex  flex-col  gap-[10px]">
                <Link className="flex gap-2 items-center" to={"/"}>
                  <p className="text-[16px]">
                    <BsFillPieChartFill />
                  </p>
                  <p className="text-[14px]">Dashboard</p>
                </Link>
                <Link className="flex gap-2 items-center" to={"/profile"}>
                  <p className="text-[16px]">
                    <AiOutlineUser />
                  </p>
                  <p className="text-[14px]">Profile</p>
                </Link>
                <Link className="flex gap-2 items-center" to={"/profile"}>
                  <p className="text-[16px]">
                    <RxAvatar />
                  </p>
                  <p className="text-[14px]">Profile</p>
                </Link>
                <Link className="flex gap-2 items-center" to={"/signup"}>
                  <p className="text-[16px]">
                    <BsFillKeyFill />
                  </p>
                  <p className="text-[14px]">Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-center h-screen ">
            <div className="w-[360px] sign_in_form md:w-[300px] flex flex-col gap-[30px] ml-[30px] md:ml-[60px] lg:ml-[100px] xl:ml-[150px] mt-[60px]">
              <div>
                <div className="text-[#17c1e8] text-[30px] font-semibold">
                  Welcome back
                </div>
                <div className="text-[#67748e] text-[16px]">
                  Enter your email and password to sign in
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[12px] text-[#344767] font-bold">Email</p>
                  <input
                    type="email"
                    className="w-full rounded-lg px-[12px] py-[8px] border border-[#67748e]"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[12px] text-[#344767] font-bold">
                    Password
                  </p>
                  <input
                    type="password"
                    className="w-full rounded-lg px-[12px] py-[8px] border border-[#67748e]"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex gap-[8px]">
                <div>
                  <UnChecked />
                </div>
                <div className="text-[#344767] text-[14px] font-semibold">
                  Remember Me
                </div>
              </div>
              <div>
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%",
                  }}
                  className="w-full h-[40px] rounded-lg text-[#fff] uppercase text-[14px] font-bold"
                >
                  sign in
                </button>
              </div>
              <div className="flex justify-center gap-[5px] items-center text-[14px]">
                <p className="text-[#67748e]">Don't have an account?</p>
                <a href="#" className="text-[#17c1e8]">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="clippy_path z-10 md:w-[300px] lg:w-[400px] xl:w-[600px]"></div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mt-[100px] gap-[20px] text-[16px] text-[#8392AB]">
          <a href="#">Company</a>
          <a href="#">About Us</a>
          <a href="#">Team</a>
          <a href="#">Product</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>
        <div className="flex justify-center flex-wrap mt-[40px] gap-[20px] text-[20px] text-[#8392AB]">
          <a href="#">
            <AiOutlineDribbble />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <BsPinterest />
          </a>
          <a href="#">
            <AiOutlineGithub />
          </a>
        </div>
        <div className="text-center mt-[40px]  text-[16px] text-[#8392AB]">
          Copyright © 2023 Soft by Creative Tim
        </div>
      </div>
    </div>
  );
};
{
}
