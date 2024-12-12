import React, { useEffect, useState } from "react";
import mob from "../../assets/fullMobile.png"
import mobile from "../../assets/mobile.png";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import chat from "./chat.svg";
import instant from "./instant.svg";
import share from "./share.svg";
import hero from "../../assets/hero_for_mobile.png"

function Feature2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-[1508px] sm:h-[1300px] bg-white flex justify-center items-center flex-col gap-5 border-b-2 border-zinc-100">
      <div className="h-[244px] flex flex-col justify-center items-center gap-2">
        <div className="w-[79px] h-[24px] rounded-[16px] bg-[#F9F5FF] text-[#6941C6] flex justify-center items-center p-0.5 ">
          Features
        </div>
        <p className="text-[#101828] font-[inter] font-semibold text-[30px] text-center">
          Cutting-edge features for advanced analytics
        </p>
        <p className="text-[#475467] font-[inter] font-normal text-[18px] sm:text-[20px] text-center h-[112px] sm:w-4/5 w-[343px]">
          {" "}
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      {isMobile && (
        <div className="h-[360px] flex justify-center items-center">
        <img src={mobile} alt="mobile" />
      </div>
      )}

      {!isMobile && (
        <div className="h-[558px] w-4/5  relative">
          <img src={hero} alt="hero" className="w-[768px] absolute right-28"/>
          <img src={mob} alt="mobile" className="h-[497px] absolute top-20 left-48"/>
      </div>
      )}


      
      <div className="h-[680px] w-full sm:w-4/5 flex flex-col justify-between items-center sm:flex-row py-12">
        <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col  justify-center items-center gap-2">
          <img src={chat} alt="chat" className="w-[48px] h-[48px]" />
          <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
            Share team inboxes
          </p>
          <p className="text-[#475467] text-[inter] font-normal text-center w-[343px]">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <button className="text-[#6941C6] text-[16px] font-semibold font-[inter]">
            Learn more <ArrowForwardOutlinedIcon />
          </button>
        </div>
        <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
          <img src={instant} alt="instant" className="w-[48px] h-[48px]" />
          <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
            Deliver instant answers
          </p>
          <p className="text-[#475467] text-[inter] font-normal text-center w-[343px]">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <button className="text-[#6941C6] text-[16px] font-semibold font-[inter]">
            Learn more <ArrowForwardOutlinedIcon />
          </button>
        </div>
        <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
          <img src={share} alt="share" className="w-[48px] h-[48px]" />
          <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
            Share team inboxes
          </p>
          <p className="text-[#475467] text-[inter] font-normal text-center w-[343px]">
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
          <button className="text-[#6941C6] text-[16px] font-semibold font-[inter]">
            Learn more <ArrowForwardOutlinedIcon />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Feature2;
