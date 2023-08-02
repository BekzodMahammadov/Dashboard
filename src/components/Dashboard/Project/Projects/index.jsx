import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import React, { useState } from "react";
import Img1 from "../../../../assets/img/team-1.jpg";
import Img2 from "../../../../assets/img/team-2.jpg";
import Img3 from "../../../../assets/img/team-3.jpg";
import Img4 from "../../../../assets/img/team-4.jpg";
import Logo1 from "../../../../assets/img/small-logos/logo-xd.svg";
import Logo2 from "../../../../assets/img/small-logos/logo-atlassian.svg";
import Logo3 from "../../../../assets/img/small-logos/logo-slack.svg";
import Logo4 from "../../../../assets/img/small-logos/logo-spotify.svg";
import Logo5 from "../../../../assets/img/small-logos/logo-jira.svg";
import Logo6 from "../../../../assets/img/small-logos/logo-invision.svg";

const data = [
  {
    id: 1,
    company: "Soft UI XD Version",
    budget: "$14,000",
    progress: "60%",
    avatars: [Img1, Img2, Img3, Img4],
    logo: Logo1,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 2,
    company: "Add Progress Track",
    budget: "$3,000",
    progress: "10%",
    avatars: [Img2, Img4],
    logo: Logo2,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 3,
    company: "Fix Platform Errors",
    budget: "Not set",
    progress: "100%",
    avatars: [Img1, Img3],
    logo: Logo3,
    bgColor: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
  },
  {
    id: 4,
    company: "Launch our Mobile App",
    budget: "$20,500",
    progress: "100%",
    avatars: [Img1, Img2, Img3, Img4],
    logo: Logo4,
    bgColor: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
  },
  {
    id: 5,
    company: "Add the New Pricing Page",
    budget: "$500",
    progress: "25%",
    avatars: [Img4, Img1],
    logo: Logo5,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 6,
    company: "Redesign New Online Shop",
    budget: "$2,000",
    progress: "40%",
    avatars: [Img1, Img4],
    logo: Logo6,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
];

export default () => {
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div>
      <div className="p-[16px] w-full  h-auto bg-[#fff] rounded-lg Shadow">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[16px] text-[#344767] font-semibold">
              Projects
            </div>
            <div className="text-[14px] text-[#344767] flex items-center">
              <p className="text-[22px] font-bold text-[#17c1e8]">
                <BiCheck />
              </p>
              <p>30 done this month</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => {
                handleDrop();
              }}
              className="text-[24px]"
            >
              <BiDotsVerticalRounded />
            </button>
            <div
              className={`text-[#67748e] text-[14px] font-medium absolute p-[24px] bg-white right-1 z-40 Shadow w-[200px] rounded-lg flex flex-col gap-[10px] ${
                !drop ? "hidden" : "block"
              }`}
            >
              <div>Action</div>
              <div>Another action</div>
              <div>Something else here</div>
            </div>
          </div>
        </div>
        <div className="mt-[20px] flex items-center justify-between text-[#8392AB] uppercase font-semibold text-[12px]">
          <p>companies</p>
          <p>Members</p>
          <p>Budget</p>
          <p>Completion</p>
        </div>
        <div className="Scroll   ">
          {data.map((item) => (
            <div className="w-[800px] lg:w-full">
              <hr />
              <tr key={item.id} className="flex justify-between">
                <td>
                  <div className="flex items-center ">
                    <img src={item.logo} className="w-[36px]" alt="" />
                    <div className="text-[14px] text-[#344767] font-semibold w-[150px]">
                      {item.company}
                    </div>
                  </div>
                </td>
                <td
                  className="
                 flex justify-start"
                >
                  <div className="flex items-center justify-center ">
                    {item.avatars.map((item) => (
                      <img
                        className="w-[23px] rounded-full ml-[-10px]  border border-white"
                        src={item}
                      />
                    ))}
                  </div>
                </td>
                <td className="w-[100px] flex justify-center">
                  <div className="text-[#67748e]  text-[12px] font-semibold">
                    {item.budget}
                  </div>
                </td>
                <td>
                  <div>
                    <div className="text-[#67748e] text-[12px] font-semibold">
                      {item.progress}
                    </div>
                    <div className="w-[100px] h-[5px] rounded-full bg-[#E9ECEF] relative">
                      <span
                        className="absolute h-full rounded-full"
                        style={{
                          width: item.progress,
                          backgroundImage: item.bgColor,
                        }}
                      ></span>
                    </div>
                  </div>
                </td>
              </tr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
