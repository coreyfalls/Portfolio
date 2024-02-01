"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#974063] to-[#FF9677]">
              Hello, Im{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Corey",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Im an Application Developer",
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
            Greatness is not meant for a few chosen people, its meant for
            those who persistently pursue their dreams everyday.
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#974063] to-[#FF9677] hover:bg-slate-800 text-white mt-3">
              <a
                href="mailto:cyb3rjutsu@gmail.com?subject=Inquiry%20about%20Job%20Opportunity"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Send Email
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#974063] to-[#FF9677] hover:bg-slate-800 text-white mt-3">
              <a
                href="/image/C.Falls_Resume.pdf" // Replace with the actual path to your PDF file
                download="CFallsCV.pdf" // Specify the desired name for the downloaded file
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image/cloud-pi.png"
              alt="masked man security logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
