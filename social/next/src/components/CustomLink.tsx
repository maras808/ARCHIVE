"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type CustomLinkType = {
  children: ReactNode;
} & LinkProps;

export default function CustomLink({ children, ...props }: CustomLinkType) {
  const router = useTransitionRouter();
  const path = usePathname();

  const animationSwitch = () => {
    return !(
      props.href.toString().split("/").at(-1) === path.split("/").at(-1) &&
      window.scrollY < window.innerHeight
    );
  };

  return (
    <Link
      prefetch={true}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href.toString(), {
          // onTransitionReady: animationSwitch() ? slideInOut : fadeInOut,
          onTransitionReady: fadeInOut,
        });
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

// function slideInOut() {
//   document.documentElement.animate(
//     [
//       {
//         opacity: 1,
//         transform: "translate(0, 0)",
//       },
//       {
//         opacity: 0,
//         transform: "translate(0, -25px)",
//       },
//     ],
//     {
//       duration: 400,
//       easing: "ease",
//       fill: "forwards",
//       pseudoElement: "::view-transition-old(root)",
//     }
//   );

//   document.documentElement.animate(
//     [
//       {
//         opacity: 0,
//         transform: "translate(0, 25px)",
//       },
//       {
//         opacity: 1,
//         transform: "translate(0, 0)",
//       },
//     ],
//     {
//       duration: 400,
//       easing: "ease",
//       fill: "forwards",
//       pseudoElement: "::view-transition-new(root)",
//     }
//   );
// }

function fadeInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
