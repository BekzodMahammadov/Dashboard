import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
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
    Websites: 30,
    MobileApps: 50,
  },
  {
    name: "May",
    Websites: 90,
    MobileApps: 40,
  },
  {
    name: "Jun",
    Websites: 40,
    MobileApps: 300,
  },
  {
    name: "Jul",
    Websites: 140,
    MobileApps: 220,
  },
  {
    name: "Aug",
    Websites: 290,
    MobileApps: 500,
  },
  {
    name: "Sept",
    Websites: 290,
    MobileApps: 250,
  },
  {
    name: "Oct",
    Websites: 340,
    MobileApps: 400,
  },
  {
    name: "Nov",
    Websites: 230,
    MobileApps: 230,
  },
  {
    name: "Dec",
    Websites: 400,
    MobileApps: 500,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="MobileApps"
            stroke="#CB0C9F"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Websites" stroke="#3A416F" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
