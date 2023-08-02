import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";

import Img1 from "../../../assets/img/small-logos/logo-spotify.svg";
import Img2 from "../../../assets/img/small-logos/logo-invision.svg";
import Img3 from "../../../assets/img/small-logos/logo-jira.svg";
import Img4 from "../../../assets/img/small-logos/logo-slack.svg";
import Img5 from "../../../assets/img/small-logos/logo-webdev.svg";
import Img6 from "../../../assets/img/small-logos/logo-xd.svg";

const data = [
  {
    id: 1,
    title: "Spotify",
    budget: "$2,500",
    status: "working",
    completion: "60%",
    company: Img1,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 2,
    title: "Invision",
    budget: "$5,000",
    status: "done",
    completion: "100%",
    company: Img2,
    bgColor: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
  },
  {
    id: 3,
    title: "Jira",
    budget: "$3,400",
    status: "canceled",
    completion: "30%",
    company: Img3,
    bgColor: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)",
  },
  {
    id: 4,
    title: "Slack",
    budget: "$1,000",
    status: "canceled",
    completion: "0%",
    company: Img4,
    bgColor: "",
  },
  {
    id: 5,
    title: "Webdev",
    budget: "$14,000",
    status: "working",
    completion: "80%",
    company: Img5,
    bgColor: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
  },
  {
    id: 6,
    title: "Adobe XD",
    budget: "$2,300",
    status: "done",
    completion: "100%",
    company: Img6,
    bgColor: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
  },
];

export default () => {
  return (
    <div className="px-[20px] md:px-[40px] mt-[20px]">
      <div className="table_project p-[16px] bg-[#fff] rounded-lg w-full Shadow">
        <div className="text-[#344767] text-[18px] font-semibold">
          Project table
        </div>
        <div className="Scroll_table">
          <table className="table  items-center md:w-full mb-0">
            <thead>
              <tr>
                <th className="uppercase text-[11px] text-left  font-bold text-[#8392AB]">
                  Project
                </th>
                <th className="uppercase text-[11px] text-left  font-bold text-[#8392AB]">
                  Budget
                </th>
                <th className="text-left uppercase text-[11px]   font-bold text-[#8392AB]">
                  Status
                </th>
                <th className="text-center uppercase text-[11px]   font-bold text-[#8392AB]">
                  Completion
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t">
                  <td>
                    <div className="flex px-2">
                      <div>
                        <img src={item.company} className="avatar w-[36px]" />
                      </div>
                      <div className="my-auto">
                        <h6 className="mb-0 text-[14px] text-[#344767] font-semibold">
                          {item.title}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-[14px] text-[#67748e] font-semibold mb-0">
                      {item.budget}
                    </p>
                  </td>
                  <td>
                    <span className="text-[12px] font-medium text-[#67748e]">
                      {item.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-[5px]">
                      <span className="text-[12px] text-[#67748e] font-medium">
                        {item.completion}
                      </span>
                      <div className="w-[100px] h-[5px] rounded-full bg-[#E9ECEF] relative">
                        <span
                          className="absolute left-0 h-full rounded-full"
                          style={{
                            width: item.completion,
                            backgroundImage: item.bgColor,
                          }}
                        ></span>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <button className="btn mb-0">
                      <BiDotsVerticalRounded />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
