import { BiDiamond } from "react-icons/bi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../assets/img/logo-ct.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { navbarChanger3 } from "../../redux/action";

const Wrapper = styled.div`
  .active {
    p {
      color: white;
      background: ${({ color }) => color};
    }
  }

  div {
    background: ${({ color }) => color};
  }
`;
const Navbar = styled.div`
  background: ${({ color }) => color};
`;

export default () => {
  const actives = useSelector((state) => state.navbarThemeReducer.actives);
  const activeted = useSelector((state) => state.themeReducer.actived);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar color={actives} className="navbar rounded-lg p-[50px]">
        <a href="#" className="flex gap-[15px] items-center">
          <img src={Img} className="w-[32px]" alt="" />
          <span className="text-[14px] font-semibold text-[#344767]">
            Soft UI Dashboard
          </span>
        </a>
        <Wrapper
          color={activeted}
          className="flex flex-col gap-[10px] justify-center"
        >
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active " : "navlink_dash"
            }
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <BiStore />
            </p>
            Dashboard
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px]  font-semibold flex items-center gap-[20px] "
            }
            to={"/tables"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <AiOutlineDatabase />
            </p>
            Table
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px] font-semibold flex items-center gap-[20px] "
            }
            to={"/billing"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <RiBillLine />
            </p>
            Billing
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px] font-semibold flex items-center gap-[20px] "
            }
            to={"/virtualreality"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <AiOutlineCodeSandbox />
            </p>
            Virtual Reality
          </NavLink>

          <p className="text-[15px] font-semibold text-[#959FB0]">
            Acconunt Pages
          </p>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px] font-semibold flex items-center gap-[20px] "
            }
            to={"/profile"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <CgProfile />
            </p>
            Profile
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px] font-semibold flex items-center gap-[20px] "
            }
            to={"/signin"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <MdOutlineLibraryBooks />
            </p>
            Sign In
          </NavLink>
          <NavLink
            onClick={() => {
              dispatch(navbarChanger3());
            }}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : "text-[14px] text-[#344767] p-[10px] font-semibold flex items-center gap-[20px] "
            }
            to={"/signup"}
          >
            <p className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-white shadow-lg">
              <BsRocketTakeoffFill />
            </p>
            Sign Up
          </NavLink>
          <div className="p-[16px]  text-[rgb(255,255,255)] rounded-xl w-[full] h-auto mt-[70px]">
            <span className="text-[22px]">
              <BiDiamond />
            </span>
            <p className="mt-[15px] text-[16px] font-semibold text-[#fff]">
              Need a help ?
            </p>
            <p className="text-[#fff] text-[14px] font-medium">
              Please check our docs
            </p>
            <button className="w-full text-[#000] mt-[10px] rounded-lg bg-[#fff] h-[30px] uppercase text-[12px] font-semibold">
              documentation
            </button>
          </div>
          <button
            className="mt-[10px] h-[40px] uppercase transition-all hover:scale-105  text-[#fff] text-[12px] font-bold rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
            }}
          >
            Upgrade to pro
          </button>
        </Wrapper>
      </Navbar>
    </div>
  );
};
