import React from "react";
import logo from "./sisyphus.svg";
import avatar from "./avatar.svg";

function Sysphus() {
  return (
    <div className="w-full h-[558px] sm:h-[552px] flex justify-center items-center bg-[#F9FAFB]">
      <div className="w-[343px] sm:w-4/5 h-[430px]  flex flex-col justify-between  items-center ">
        <img src={logo} alt="sisyphus" className="h-[40px]" />
        <p className="text-center text-[inter] font-medium text-[30px] sm:text-[48px]">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </p>
        <div className="w-full flex flex-col justify-between items-center gap-2">
          <img src={avatar} alt="avater" className="h-[64px] w-[64px]" />
          <div className="flex flex-col justify-center items-center ">
            <p className="text-[#101828] font-[inter] font-semibold text-[18px]">
              Candice Wu
            </p>
            <p className="text-[#475467] font-[inter] font-semibold text-[18px]">
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sysphus;
