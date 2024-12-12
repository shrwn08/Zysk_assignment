import React from "react";
import boltshift from "../../assets/boltshift.png";
import lightbox from "../../assets/lightbox.png";
import featherDev from "../../assets/featherdev.png"
import spherule from "../../assets/spherule.png"
import globalbank from "../../assets/globalbank.png"
import nietzsche from "../../assets/nietzsche.png"

function Company() {
  return (
    <div className="w-full h-[260px] flex justify-center items-center bg-[#F9FAFB]">
      <div className="w-11/12 sm:w-4/5 sm:h-[104px] flex justify-center items-center flex-col border-b-2 border-b-zinc-200 ">
        <p className="text-[16px] text-[#475467] font-medium font-[inter] ">
          Join 4,000+ companies already growing
        </p>
        <div className="w-full grid grid-cols-2 gap-2 justify-center items-center sm:flex sm:justify-between ">
          <img src={boltshift} alt="boltshift" className="h-[48px]"/>
          <img src={lightbox} alt="lightbox" className="h-[48px]"/>
          <img src={featherDev} alt="featherdev" className="h-[48px]"/>
          <img src={spherule} alt="lightbox" className="h-[48px]"/>
          <img src={globalbank} alt="boltshift" className="h-[48px]"/>
          <img src={nietzsche} alt="lightbox" className="h-[48px]"/>
        </div>
      </div>
    </div>
  );
}

export default Company;
