import React from "react";
import Img1 from "../../../assets/img/home-decor-1.jpg";
import Img2 from "../../../assets/img/home-decor-2.jpg";
import Img3 from "../../../assets/img/home-decor-3.jpg";

import Team1 from "../../../assets/img/team-1.jpg";
import Team2 from "../../../assets/img/team-2.jpg";
import Team3 from "../../../assets/img/team-3.jpg";
import Team4 from "../../../assets/img/team-4.jpg";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Project #1",
    quality: "Modern",
    about:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    id: 2,
    img: Img2,
    title: "Project #2",
    quality: "Scandinavian",
    about:
      "Music is something that every person has his or her own specific opinion about.",
  },
  {
    id: 3,
    img: Img3,
    title: "Project #3",
    quality: "Minimalist",
    about: "Different people have different taste, and various types of music.",
  },
];

export default () => {
  return (
    <div className="px-[20px] md:px-[40px] mt-[20px]">
      <div className="profile_projects p-[16px] Shadow rounded-lg bg-white  w-full">
        <div className="text-[16px] text-[#344767] font-medium">Projects</div>
        <div className="text-[14px] text-[#67748e]">
          Architects design houses
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-[20px] gap-[20px]">
          {data.map((item) => (
            <div className="w-full" key={item.id}>
              <div className="Shadow">
                <img src={item.img} className="rounded-xl" alt="" />
              </div>
              <div className="mt-[20px]">
                <div className="text-[14px] text-[#344767]">{item.title}</div>
                <div className="text-[20px] text-[#344767] font-semibold">
                  {item.quality}
                </div>
                <div className="text-[14px] text-[#67748e]">{item.about}</div>
              </div>
              <div className="flex justify-between items-center mt-[20px]">
                <div>
                  <button className="text-[#cb0c9f] transition-all font-semibold hover:scale-105 text-[10px] border border-[#cb0c9f] rounded-lg py-[5px] px-[15px] uppercase">
                    view project
                  </button>
                </div>
                <div className="flex ">
                  <img
                    src={Team1}
                    className="w-[25px] ml-[-10px] border-2 border-white rounded-full"
                    alt=""
                  />
                  <img
                    src={Team2}
                    className="w-[25px] ml-[-10px] border-2 border-white rounded-full"
                    alt=""
                  />
                  <img
                    src={Team3}
                    className="w-[25px] ml-[-10px] border-2 border-white rounded-full"
                    alt=""
                  />
                  <img
                    src={Team4}
                    className="w-[25px] ml-[-10px] border-2 border-white rounded-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
