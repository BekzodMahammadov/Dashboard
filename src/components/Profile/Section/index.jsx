import React from "react";
import Checked from "../../Switches/Checked";
import UnChecked from "../../Switches/UnChecked";
import Img1 from "../../../assets/img/kal-visuals-square.jpg";
import Img2 from "../../../assets/img/marie.jpg";
import Img3 from "../../../assets/img/ivana-square.jpg";
import Img4 from "../../../assets/img/team-4.jpg";
import Img5 from "../../../assets/img/team-3.jpg";

const data = [
  {
    id: 1,
    person: "Sophie B.",
    comment: "Hi! I need more information..",
    img: Img1,
  },
  {
    id: 2,
    person: "Anne Marie",
    comment: "Awesome work, can you..",
    img: Img2,
  },
  {
    id: 3,
    person: "Ivanna",
    comment: "About files I can..",
    img: Img3,
  },
  {
    id: 4,
    person: "Peterson",
    comment: "Have a great afternoon..",
    img: Img4,
  },
  {
    id: 5,
    person: "Nick Daniel",
    comment: "Hi! I need more information..",
    img: Img5,
  },
];

export default () => {
  return (
    <div className="mt-[20px] px-[20px] md:px-[40px]">
      <div className="profile_section grid grid-cols-1 xl:grid-cols-3 gap-[20px]">
        <div className="w-full bg-[#fff] rounded-lg Shadow p-[16px]">
          <div className="text-[16px] text-[#344767] font-semibold">
            Platform Settings
          </div>
          <div className="mt-[20px] flex flex-col gap-[15px]">
            <div className="text-[12px] uppercase text-[#67748e] font-medium">
              Account
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <Checked />
              </div>
              <div>Email me when someone follows me</div>
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <UnChecked />
              </div>
              <div>Email me when someone answers on my post</div>
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <Checked />
              </div>
              <div>Email me when someone mentions me</div>
            </div>
          </div>
          <div className="mt-[20px] flex flex-col gap-[15px]">
            <div className="text-[12px] uppercase text-[#67748e] font-medium">
              APPLICATION
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <UnChecked />
              </div>
              <div>New launches and projects</div>
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <Checked />
              </div>
              <div>Monthly product updates</div>
            </div>
            <div className="text-[15px] text-[#67748e] flex items-center gap-[7px]">
              <div>
                <UnChecked />
              </div>
              <div>Subscribe to newsletter</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#fff] rounded-lg Shadow p-[16px]">
          <div className="text-[16px] text-[#344767] font-semibold">
            Platform Settings
          </div>
          <div className="text-[16px] text-[#67748e] mt-[20px]">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </div>
          <div className="flex flex-col gap-[15px] mt-[35px]">
            <div className="flex items-center gap-[4px]">
              <p className="text-[16px] font-semibold text-[#344767]">
                Full Name:
              </p>
              <p className="text-[16px] text-[#67748e]">Alec M. Thompson</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[16px] font-semibold text-[#344767]">
                Mobile:
              </p>
              <p className="text-[16px] text-[#67748e]">(44) 123 1234 123</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[16px] font-semibold text-[#344767]">Email:</p>
              <p className="text-[16px] text-[#67748e]">
                alecthompson@mail.com
              </p>{" "}
            </div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[16px] font-semibold text-[#344767]">
                Location:
              </p>
              <p className="text-[16px] text-[#67748e]">USA</p>
            </div>
            <div className="flex items-center gap-[4px]">
              <p className="text-[16px] font-semibold text-[#344767]">
                Social:
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#fff] rounded-lg Shadow p-[16px]">
          <div className="text-[16px] text-[#344767] font-semibold">
            Platform Settings
          </div>
          <div className="flex flex-col gap-[25px] mt-[30px]">
            {data.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src={item.img}
                      className="w-[48px] rounded-xl"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[#344767] text-[16px] font-semibold">
                      {item.person}
                    </p>
                    <p className="text-[#67748e] text-[14px]">{item.comment}</p>
                  </div>
                </div>
                <div>
                  <button className="text-[14px] font-semibold text-[#cb0c9f] uppercase">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
