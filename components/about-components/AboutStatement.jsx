import React from "react";
import Image from "next/image";
import image1 from "../imgs/reasons.png";
const AboutStatement = () => {
  return (
    <div className="w-full">
      <div className="items-center py-7 font-bold text-[25px] md:text-[38px] flex justify-center">
        TECH<span className="text-orange">DEV</span> CYBER
      </div>

      <div className="flex justify-between w-[85%] gap-5 md:flex-row flex-col m-auto ">
        <div className="font-semibold flex-1 relative flex justify-cente ">
          <p className="leading-[30px] max-w-lg md:leading-[58px] tracking-normal text-[19px]">
            Techdev Cyber is a digital service provider agency that helps
            businesses of all sizes to grow and succeed. We provide a complete
            suite of services from Strategy, Web Design & Development, App
            Design, and SEO to Digital Marketing, Copywriting, UX/UI, and more.
          </p>
          <div className="h-32 w-32 left-[20%] animate-bounce duration-300 absolute top-0 bg-[#FF5C00] opacity-50 rounded-full"></div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <Image
            width={300}
            height={0}
            objectFit="contain"
            src={image1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutStatement;
