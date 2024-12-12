import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

function Tagline() {
  return (
    <div className="w-[343px] sm:w-4/5 flex justify-center items-center flex-col  ">
      <div className="w-[307px] sm:w-[355px] h-[30px] bg-[#E9D7FE] rounded-[16px] flex justify-center items-center gap-5">
        <div className="text-[#6941C6] sm:text-sm sm:font-medium font-medium bg-white text-xs font-[inter] rounded-[16px] p-1 sm:px-2 flex justify-center items-center">
          New Feature
        </div>
        <div className="text-[#6941C6] sm:text-sm sm:font-medium font-medium text-xs font-[inter] rounded-[16px] p-1 sm:px-2 flex justify-center items-center">
          Check out the team dashboard &nbsp; <ArrowForwardIcon />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[36px] sm:text-[60px] font-semibold font-[inter] text-center">
          Beautiful analytics to grow smarter
        </p>
        <div className="text-[18px] font-normal flex justify-center items-center text-[#475467] w-4/5">
          <p className="text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>
      <div className="w-full flex-col sm:flex-row flex sm:justify-center sm:items-center gap-2">
                <button className="w-full sm:w-[122px]  rounded-[8px] py-[12px] px-[20px] text-[#344054] border-2  font-[inter] text-[16px] font-semibold"><PlayCircleOutlineOutlinedIcon />Demo</button>
                <button className="w-full sm:w-[122px] bg-[#7F56D9] rounded-[8px] py-[12px] px-[20px] text-white font-[inter] text-[16px] font-semibold">Sign Up</button>
      </div>
    </div>
  );
}

export default Tagline;
