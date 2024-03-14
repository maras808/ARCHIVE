"use client";

import { Center, Flex, Text } from "@chakra-ui/react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type MetricType = {
  title: string;
  desc?: string;
};

export default function Metric({ title, desc }: MetricType) {
  const MAX_CALCULATED_VALUE = 0.722;

  const scaleValue = (input: number) => {
    return input * MAX_CALCULATED_VALUE;
  };
  const [rawState, setRawState] = useState<number>(1 /**FROM DB */);
  const motionState = useSpring(scaleValue(rawState), {
    stiffness: 100,
    damping: 30,
  });
  const motionStatePercent = useTransform(
    motionState,
    [0, MAX_CALCULATED_VALUE],
    [0, 100]
  );

  motionStatePercent.on("change", () => {
    setRawState(motionStatePercent.get());
  });

  useEffect(() => {
    const int = setInterval(() => {
      motionState.set(scaleValue(Math.random() * (1 - 0 + 0) + 0));
    }, 3000);
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <Flex
      direction={"column"}
      h={"100%"}
      justifyContent={"flex-start"}
      position={"relative"}
    >
      <Flex justifyContent={"space-between"}>
        <Text>{title}</Text>
        <Text as={"i"}>{desc}</Text>
      </Flex>
      <Flex
        w={"100%"}
        h={"100%"}
        justify={"center"}
        align={"center"}
        position={"relative"}
      >
        <svg
          id="progress"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          style={{
            transform: "rotate(140deg)",
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* <stop offset="0%" stopColor="#FF0000" />
            <stop offset="15%" stopColor="#FF0000" />
            <stop offset="45%" stopColor="#FFFF00" />
            <stop offset="55%" stopColor="#FFFF00" />
            <stop offset="85%" stopColor="#00FF00" />
            <stop offset="100%" stopColor="#00FF00" /> */}
              <stop offset="0%" stopColor="#330867" />
              <stop offset="100%" stopColor="#30cfd0" />
            </linearGradient>
          </defs>

          <motion.circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            className="indicator"
            style={{
              pathLength: motionState,
              strokeDashoffset: 0,
              strokeWidth: "0.50rem",
              strokeLinecap: "round",
              fill: "none",
              stroke: "url(#gradient)", // Użycie gradientu
            }}
          />
        </svg>
        <Center
          position={"absolute"}
          inset={0}
          margin={"auto"}
          fontSize={"2rem"}
          sx={{ fontVariantNumeric: "tabular-nums" }}
        >
          {motionStatePercent.get().toFixed()}%
        </Center>
      </Flex>
    </Flex>
  );
}
