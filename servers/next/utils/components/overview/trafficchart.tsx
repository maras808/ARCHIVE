"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TrafficChart() {
  const data = [
    {
      value: 12,
      date: "2024-12-12",
    },
    {
      value: 8,
      date: "2024-12-11",
    },
    {
      value: 15,
      date: "2024-12-10",
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid stroke="dark.200"></CartesianGrid>
        <XAxis dataKey={"date"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey={"value"} type={"monotone"} name="Traffic"></Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
