import { AiFillBell } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import VirtualReality from "./pages/VirtualReality";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import Settings from "./components/Settings";
import { useDispatch, useSelector } from "react-redux";
import { navbarChanger3 } from "./redux/action";
import Message from "./components/Navbar/Message";

function App() {
  const [drop, setDrop] = useState(false);
  const [setting, setSetting] = useState(false);
  const falseSettings = () => {
    if (setting) {
      setSetting(!setting);
    }
  };

  // const [open, setOpen] = useState(false);
  const navbarClose = useSelector((state) => state.navbarReducer.navbarClose);
  const open = useSelector((state) => state.navbarReducer.navbarOpen);
  const dispatch = useDispatch();

  const handleSettings = () => {
    setSetting(!setting);
  };

  const handleDrop = () => {
    setDrop(!drop);
  };
  const handleClik = () => {
    // setOpen(!open);
    dispatch(navbarChanger3());
  };
  return (
    <div className="App">
      <div
        className={`fixed top-0 navbar_div h-screen  z-50 xl:left-0  ${
          !open ? "left-0" : "-left-[300px] "
        } ${navbarClose && "hidden"}`}
      >
        <Navbar />
      </div>
      <div
        className={`xl:w-[20%]  ${!open && "w-0"}  ${navbarClose && "hidden"}`}
      ></div>
      <div className={`Main  w-[100%] `}>
        <div className={` ${navbarClose && "hidden"}`}>
          <div
            className={`p-[40px] main_navbar md:flex md:items-center justify-between `}
          >
            <div className={`text-[#344767] font-semibold text-[16px] `}>
              Dashboard
            </div>
            <div className="flex items-center gap-[20px] text-[#67748e]">
              <div className="flex items-center">
                <button className="text-[18px] border rounded-s-[8px] w-[40px] h-[40px] bg-white flex justify-center items-center">
                  <BiSearch />
                </button>
                <input
                  className="w-[100px] md:w-[173px] h-[40px] px-[10px] border nav_input rounded-e-[8px] bg-white"
                  placeholder="Type here..."
                />
              </div>
              <NavLink to={"/signin"}>
                <button className="flex items-center  text-[#67748e] gap-[10px]">
                  <FaUserAlt />
                  <p className="hidden md:block">Sign In</p>
                </button>
              </NavLink>
              <div>
                <button className="block xl:hidden " onClick={handleClik}>
                  <GiHamburgerMenu />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleSettings();
                  }}
                >
                  <AiFillSetting />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    handleDrop();
                  }}
                >
                  <AiFillBell />
                </button>
                <div className={`${!drop ? "hidden" : "block"} `}>
                  <Message />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/virtualreality" element={<VirtualReality />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <div className={`${navbarClose && "hidden"}`}>
          <div
            className={`${
              !setting ? "hidden" : "block"
            }  transition-all  z-[999999]`}
          >
            <Settings func={falseSettings} />
          </div>
          <button
            onClick={() => {
              handleSettings();
            }}
            className="setting_btn w-[51px] h-[51px] bg-[#fff] shadow-lg rounded-full text-[16px]"
          >
            <IoIosSettings />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
