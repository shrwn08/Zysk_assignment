import React from "react";

function FreeTrail() {
  return (
    <div className="w-full h-[378px] flex justify-center items-center">
      <div className="w-[343px] h-[250px] flex flex-col justify-between items-center">
        <p className="text-[30px] font-[inter] font-semibold text-[#101828] text-center">
          Start your free trial
        </p>
        <p className="text-[18px] font-[inter] font-normal text-[#475467] text-center">
          {" "}
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex justify-center items-center flex-col gap-2 w-full">
          <button className="w-full h-[48px] rounded-[8px] bg-[#7F56D9] text-white">Get Started</button>
          <button className="w-full h-[48px] rounded-[8px] bg-white text-[#344054] border-2 border-zinc-500">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default FreeTrail;
