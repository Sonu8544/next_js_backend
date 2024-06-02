"use client";
import Link from "next/link";
import { RiAdminFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";

import React from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";

export function AboutModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Link
        href="#about"
        className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
      >
        <button
          onClick={handleOpen}
          variant="gradient"
          className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3"
        >
          <span>About</span>
          <RiAdminFill size={16} />
        </button>
      </Link>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-slate-900 mx-auto mt-6 h-[90vh] md:h-[80vh] w-[90vw] md:max-w-[80vw] xl:max-w-[70vw] shadow-xl rounded-xl"
      >
        <div className="flex justify-end p-2">
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="p-0 group"
          >
            <IoMdCloseCircleOutline
              className="text-red-600 transition-transform duration-300 group-hover:rotate-90"
              size={40}
            />
          </Button>
        </div>
        <DialogBody className="text-white flex">
          <div className="popupLeft md:w-[50%]">
            <h1 className="text-center text-2xl md:text-3xl text-pink-500 font-semibold ">
              About Me.
            </h1>
            <p className="text-[0.85rem] px-4 mt-4 text-center">
              I help business owners and busy web developers to design &amp;
              develop creative websites that fits their vision and attracts the
              visitors to stay for ever. Technologies and tools that I use to
              create such awesome websites.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2 px-4 ">
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #HTML
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #CSS
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #JavaScript
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #React js
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #Next js
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #Remix js
              </li>
              <li
                type="button"
                className="py-1 px-2 text-sm font-normal border-[1px] border-gray-400 rounded-xl focus:z-10 focus:ring-4"
              >
                #Mongo DB
              </li>
            </ul>
            {/* <img src="/mernlogo.png" alt="logo" /> */}
            <div className="skillsLogo mt-10">
              <h1 className="text-center text-2xl md:text-3xl text-pink-500 font-semibold ">
                TECH STACK .
              </h1>
              <ul className="flex max-w-[80%] mx-auto mt-4 justify-center gap-4">
                <li className="flex flex-col gap-2 text-[#00ffff]">
                  <FaReact size={40} />
                  <h1 className="text-center font-bold"> R </h1>
                </li>
                <li className="flex flex-col gap-2">
                  <SiNextdotjs size={40} />
                  <h1 className="text-center font-bold"> N </h1>
                </li>
                <li className="flex flex-col gap-2">
                  <SiExpress size={40} />
                  <h1 className="text-center font-bold"> E </h1>
                </li>
                <li className="flex flex-col gap-2 text-[#6fa660]">
                  <BiLogoNodejs size={40} />
                  <h1 className="text-center font-bold"> N </h1>
                </li>
                <li className="flex flex-col gap-2 text-[#47A248]">
                  <DiMongodb size={40} />
                  <h1 className="text-center font-bold"> M </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="popupRight hidden md:block md:w-[50%] flex my-auto justify-center item-center">
            <img src="/coder.svg" alt="" />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
