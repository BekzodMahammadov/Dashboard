import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Apr",
    sales: 450,
  },
  {
    name: "May",
    sales: 200,
  },
  {
    name: "Jun",
    sales: 100,
  },
  {
    name: "July",
    sales: 220,
  },
  {
    name: "Aug",
    sales: 500,
  },
  {
    name: "Sep",
    sales: 100,
  },
  {
    name: "Oct",
    sales: 400,
  },
  {
    name: "Nov",
    sales: 230,
  },
  {
    name: "Dec",
    sales: 500,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: "#000" }} />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="sales"
            fill="#8884d8"
            // style={{ borderRadius: "50%" }}
            background={{ fill: "#fff" }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
