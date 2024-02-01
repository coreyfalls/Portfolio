"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#974063] to-[#FF9677]">
            Hello, I'm{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Corey",
              1000,
              "I'm an Application Developer",
              1000,
              "And Cyber Security Enthusiast",
              1000,
              "Looking to land a security role!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          "Greatness is not meant for a few chosen people, it's meant for those who persistently pursue their dreams every day."
        </p>
        <div className="space-y-3">
          <button className="w-full sm:w-fit rounded-full bg-gradient-to-r from-[#974063] to-[#FF9677] hover:bg-slate-800 text-white py-2">
            <a
              href="mailto:cyb3rjutsu@gmail.com?subject=Inquiry%20about%20Job%20Opportunity"
              className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5"
            >
              Send Email
            </a>
          </button>
          <button className="w-full sm:w-fit rounded-full bg-gradient-to-r from-[#974063] to-[#FF9677] hover:bg-slate-800 text-white py-2">
            <Link href="/image/C.Falls_Resume.pdf">
              <a download="CFallsCV.pdf" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5">
                Download CV
              </a>
            </Link>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/image/cloud-pi.png"
            alt="Cloud Security Image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

