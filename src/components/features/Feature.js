import React from "react";
import chat from "./chat.svg";
import instant from "./instant.svg";
import share from "./share.svg";
import smile from "./smile.svg";
import tools from "./tools.svg";
import sms from "./sms.svg";

function Feature() {
  return (
    <div className="w-full h-[1620px] sm:h-auto flex justify-center items-center  ">
      <div className="w-[343px] sm:w-4/5 flex flex-col justify-between items-center gap-5 border-b-2 border-b-zinc-200">
            
        <div className="w-full sm:w-[768px] flex flex-col justify-center items-center ">
          <p className="text-[#6941C6] text-[14px] font-semibold font-[inter] text-center font">
            Features
          </p>
          <p className="text-[30px] font-semibold font-[inter] text-[#101828] text-center">
            Analytics that feels like it’s from the future
          </p>
          <p className="font-[inter] font-normal text-[18px] text-center text-[#475467]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-5 sm:grid sm:grid-cols-3">
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={chat} alt="chat" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Share team inboxes
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={instant} alt="" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Deliver instant answers
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={share} alt="" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Manage your team with reports
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={smile} alt="" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Connect with customers
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={tools} alt="" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Connect the tools you already use
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="w-full h-[160px] sm:w-[384px] sm:h-[178px] flex flex-col justify-center items-center gap-2">
            <img src={sms} alt="" className="w-[48px] h-[48px]" />
            <p className="text-[18px] font-[inter] font-semibold text-[#101828] text-center">
              Our people make the difference
            </p>
            <p className="text-[#475467] text-[inter] font-normal text-center">
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
