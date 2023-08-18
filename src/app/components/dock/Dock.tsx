"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import AppIcon from "./AppIcon";
import Link from "next/link";

export default function Dock() {
  let mouseX = useMotionValue(Infinity);

  let Links = [
    {
      id : "now_playing",
      name : "Now Playing",
      link : "/now_playing"
    },
    {
      id : "tv_shows",
      name : "TV Shows",
      link : "/now_playing"
    }
  ]

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="border border-gray-100 bg-opacity-60 backdrop-filter backdrop-blur-lg fixed left-1/2 -translate-x-1/2 bottom-5 mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-3 w-min"
    >
      {Links.map((item, i) => (
        <Link key={i} href={item.link} >
          <AppIcon mouseX={mouseX} />
        </Link>
      ))}
    </motion.div>
  );
}