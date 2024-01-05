"use client";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="hover:bg-green-400 rounded-full w-[40px] lg:w-[70px] h-[40px] flex justify-center text-white font-bold bg-blue-400 items-center lg:text-base text-[24px]"
      href="/"
    >
      YT
    </Link>
  );
};

export default Logo;
