import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarChanger2 } from "../../redux/action";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

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
      <div className="rounded-xl p-[15px]">
        <div className="sign_up_curved w-full h-[450px]">
          <div className="sign_up_opacity rounded-xl ">
            <div className="sticky  top-[20px] z-40  py-[13px] px-[60px] rounded-full flex justify-between items-center w-full">
              <div className="capitalize text-[14px] font-bold text-[#fff]">
                soft ui dashboard
              </div>
              <div className="text-[#fff] z-40  hidden lg:flex items-center gap-[20px]">
                <Link className="flex gap-2 items-center" to={"/"}>
                  Pages
                </Link>
                <a href="#">Authentication</a>
                <a href="#">Applications</a>
                <a href="#">Ecommers</a>
                <a href="#">Docs</a>
              </div>

              <div className="hidden lg:block">
                <button
                  style={{
                    backgroundImage:
                      " linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
                  }}
                  className="w-[119px] h-[32px] rounded-full uppercase text-[#fff] font-bold text-[12px]"
                >
                  buy now
                </button>
              </div>
              <div className="block lg:hidden relative">
                <button
                  className="text-[20px] text-[#fff]"
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  <AiOutlineMenu />
                </button>
              </div>
            </div>
            <div className="w-[100%] ">
              <div
                className={`absolute open_sign_in z-20 px-[40px] pt-[20px] pb-[20px] top-[60px] left-[0px] bg-[#fff]  rounded-[30px] Shadow ${
                  !open ? "hidden" : "block"
                }`}
              >
                <div className="text-[#344767] w-full flex  flex-col  gap-[10px]">
                  <Link className="flex gap-2 items-center" to={"/"}>
                    Pages
                  </Link>
                  <a href="#">Authentication</a>
                  <a href="#">Applications</a>
                  <a href="#">Ecommers</a>
                  <a href="#">Docs</a>
                </div>
              </div>
            </div>
            <div className=" w-full h-[60%] flex justify-center items-center">
              <div>
                <div className="text-[#fff] text-[48px] font-bold text-center">
                  Welcome
                </div>
                <div className="text-[#fff] text-[16px] font-medium text-center">
                  Use these awesome forms to login or create new <br /> account
                  in your project for free.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[-160px]">
          <div className="rounded-xl p-[24px] Shadow bg-[#fff] w-[385px] ">
            <div className="text-[20px] font-semibold text-[#344767] text-center">
              Register with
            </div>
            <div className="mt-[20px] flex justify-center gap-[10px]">
              <button className="px-[25px] text-[25px] text-[#3C5A9A]  border rounded-lg  py-[15px]">
                <BsFacebook />
              </button>
              <button className="px-[25px] text-[25px]  border rounded-lg  py-[15px]">
                <AiFillApple />
              </button>
              <button className="px-[25px] text-[25px]  border rounded-lg  py-[15px]">
                <FcGoogle />
              </button>
            </div>
            <div className="mt-[20px] text-[#8392AB] text-center font-semibold ">
              or
            </div>
            <div className="flex flex-col gap-[15px] mt-[20px]">
              <input
                type="text"
                className="py-[8px] px-[12px] rounded-lg border w-full"
                placeholder="Name"
              />
              <input
                type="email"
                className="py-[8px] px-[12px] rounded-lg border w-full"
                placeholder="Email"
              />
              <input
                type="password"
                className="py-[8px] px-[12px] rounded-lg border w-full"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center gap-[8px] mt-[20px]">
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="text-[14px] text-[#344767]">
                <a href="#">I agree the</a>
                <span className="font-semibold">Terms and Condition</span>
              </div>
            </div>
            <div className="mt-[20px]">
              <button
                style={{
                  backgroundImage:
                    " linear-gradient(310deg, #141727 0%, #3A416F 100%)",
                }}
                className="w-full transition-all hover:scale-105 h-[40px] rounded-lg text-[#fff] uppercase font-semibold text-[12px]"
              >
                sign up
              </button>
            </div>
            <div className="flex items-center text-[14px] mt-[20px] text-[#344767]">
              <p>
                Already have an account?
                <a href="#" className="font-semibold">
                  Sign In
                </a>
              </p>
            </div>
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
        <div className="text-center mt-[40px]  text-[16px] text-[#8392AB]">
          Copyright © 2023 Soft by Creative Tim
        </div>
      </div>
    </div>
  );
};
