import React, { useEffect, useState } from "react";
import logo from "./Logo.svg";
import avatar from "./avatar.svg";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [burgurBtn, setBurgurBtn] = useState(false);

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

  const handleBurgurBtn = () => {
    setBurgurBtn((prev) => !prev);
  };

  return (
    <div className="navbar h-auto w-full flex justify-center items-center flex-col">
      <div className="w-11/12 sm:w-4/5 flex justify-between items-center   ">
        <div className="flex gap-1 justify-start items-center">
          <img src={logo} alt="logo" />
          <p className="text-[#101828] font-semibold text-2xl">Untitled UI</p>
          {!isMobile && (
            <div className="flex gap-2 sm:w-[404px] justify-between items-center ml-6">
              <button className="font-semibold text-[#475467]">Home</button>
              <button className="font-semibold text-[#475467]">Products</button>
              <button className="font-semibold text-[#475467]">Resources</button>
              <button className="font-semibold text-[#475467]">Pricing</button>
            </div>
          )}
        </div>

        <div className="avatar h-[40px] hidden sm:block w-[40px] rounded-full border-">
          <img src={avatar} alt="avatar" />
        </div>
        {isMobile && (
          <button
            onClick={handleBurgurBtn}
            className="burgur-icon h-[40px] w-[40px] flex flex-col justify-center items-center gap-1"
          >
            <div className="w-[18px] h-1 bg-slate-400"></div>
            <div className="w-[18px] h-1 bg-slate-400"></div>
            <div className="w-[18px] h-1 bg-slate-400"></div>
          </button>
        )}
      </div>
      {burgurBtn && (
        <div className="flex gap-2  justify-between items-center ml-6">
          <button className="font-semibold text-[#475467]">Home</button>
          <button className="font-semibold text-[#475467]">Products</button>
          <button className="font-semibold text-[#475467]">Resources</button>
          <button className="font-semibold text-[#475467]">Pricing</button>
          <div className="avatar h-[40px] w-[40px] rounded-full border-">
          <img src={avatar} alt="avatar" />
        </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
