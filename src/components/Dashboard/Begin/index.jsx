import { HiShoppingCart } from "react-icons/hi";
import { GiDiploma } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import React from "react";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Today's Money",
    price: "$53,000",
    discount: "+55%",
    discountColor: "#82d616",
    icon: <GiCash />,
  },
  {
    id: 2,
    title: "Today's Money",
    price: "2,000",
    discount: "+3%",
    discountColor: "#82d616",
    icon: <BiWorld />,
  },
  {
    id: 3,
    title: "TNew Clients",
    price: "+3,462",
    discount: "-2%",
    discountColor: "#ea0606 ",
    icon: <GiDiploma />,
  },
  {
    id: 4,
    title: "Sales",
    price: "$103,430 ",
    discount: "+5%",
    discountColor: "#82d616",
    icon: <HiShoppingCart />,
  },
];

export default () => {
  return (
    <div>
      <div className="dashboard_begin grid gap-[20px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[20px] md:px-[40px]">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            discount={item.discount}
            color={item.discountColor}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
