import React from "react";
import logo from "./logo.svg";
function About() {
  return (
    <div className="w-full h-auto mb-3 flex justify-center items-center flex-col">
      <div className="w-[343px] sm:w-4/5 flex justify-center items-center">
        <div className="w-full ml-10 flex flex-col gap-3 sm:grid grid-cols-3">
          <div className="">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Products
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Overview
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Features
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Solutions
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Tutorials
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Pricing
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Releases
              </p>
            </div>
          </div>
          <div className=" ">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Resources
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Blog
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Newsletter
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Events
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Help centre
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Tutorials
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Support
              </p>
            </div>
          </div>
          <div className="">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Social
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Twitter
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                LinkedIn
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Facebook
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                GitHub
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                AngelList
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Dribbble
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 sm:grid grid-cols-3">
          <div className="">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Company
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                About us
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Careers
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Press
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                News
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Media kit
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Contact
              </p>
            </div>
          </div>
          <div className="">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Use cases
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Startups
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Enterprise
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Government
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                SaaS centre
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Marketplaces
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Ecommerce
              </p>
            </div>
          </div>
          <div className="">
            <p className="font-[inter] text-[14px] font-semibold text-[#667085]">
              Legal
            </p>
            <div className="">
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Terms
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Privacy
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Cookies
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Licenses
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Settings
              </p>
              <p className="font-[inter] font-semibold text-[16px] text-[#475467]">
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="w-[343px] sm:w-4/5 flex justify-center items-start flex-col sm:flex-row sm:justify-between">
          <div className=" flex justify-start items-center">
            <img src={logo} alt="logo" />
            <p className="text-[#101828] font-[inter] font-semibold text-2xl">
              Untitled UI
            </p>
          </div>
          <p>© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
