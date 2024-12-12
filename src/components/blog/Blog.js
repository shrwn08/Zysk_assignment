import pic from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
import avatar from "./avatar.svg";
import avatar2 from "./avatar2.svg";
import avatar3 from "./avatar3.svg";

function Blog() {
 
  return (
    <div className="w-full h-[1914px] sm:h-[830px] flex justify-center ">
      <div className="w-[343px] sm:w-4/5 ">
        <div className="w-full h-[142px]">
        <div className="sm:flex justify-between items-center">
        <p className="font-[inter] font-semibold text-[14px] text-[#6941C6]">
            Our blog
          </p>
          <button className="w- bg-[#7F56D9] text-[white] rounded-[8px] py-[12px] px-[20px] mt-5 text-[16px] font-semibold font-[inter] hidden sm:block">
          View all posts
        </button>
        </div>
         
          <p className="font-[inter] font-semibold text-[30px]">
            Lastest blog posts
          </p>
          <p className="font-[inter] font-normal text-[18px] text-[#475467]">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="sm:flex justify-between items-center">
          <div className="h-[468px] w-full flex flex-col justify-between items-start mt-4">
            <img src={pic} alt="pic" className="h-[240px]" />
            <div className="h-[204px] w-full  flex flex-col justify-between items-start">
              <p className="text-[14px] font-semibold font-[inter] text-[#6941C6]">
                Design
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[24px] font-[inter] font-semibold text-[#101828] ">
                  UX review presentations
                </p>
                <CallMadeIcon />
              </div>
              <p className="text-[16px] font-[inter] font-normal text-[#475467]">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="w-[136px] flex justify-between items-center">
                <img src={avatar} alt="avatar" />
                <div>
                  <p className="text-[14px] font-semibold font-[inter]">
                    Olivia Rhye
                  </p>
                  <p className="text-[14px] font-normal font-[inter]">
                    20 Jan 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[468px] w-full flex flex-col justify-between items-start mt-4">
            <img src={pic2} alt="pic" className="h-[240px]" />
            <div className="h-[204px] w-full  flex flex-col justify-between items-start">
              <p className="text-[14px] font-semibold font-[inter] text-[#6941C6]">
                Product
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[24px] font-[inter] font-semibold text-[#101828] ">
                  Migrating to Linear 101
                </p>
                <CallMadeIcon />
              </div>
              <p className="text-[16px] font-[inter] font-normal text-[#475467]">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </p>
              <div className="w-[136px] flex justify-between items-center">
                <img src={avatar2} alt="avatar" />
                <div>
                  <p className="text-[14px] font-semibold font-[inter]">
                    Phoenix Baker
                  </p>
                  <p className="text-[14px] font-normal font-[inter]">
                    19 Jan 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[468px] w-full flex flex-col justify-between items-start mt-4">
            <img src={pic3} alt="pic" className="h-[240px]" />
            <div className="h-[204px] w-full  flex flex-col justify-between items-start">
              <p className="text-[14px] font-semibold font-[inter] text-[#6941C6]">
                Software Engineering
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[24px] font-[inter] font-semibold text-[#101828] ">
                  Building your API stack
                </p>
                <CallMadeIcon />
              </div>
              <p className="text-[16px] font-[inter] font-normal text-[#475467]">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="w-[136px] flex justify-between items-center">
                <img src={avatar3} alt="avatar" />
                <div>
                  <p className="text-[14px] font-semibold font-[inter]">
                    Lana Steiner
                  </p>
                  <p className="text-[14px] font-normal font-[inter]">
                    18 Jan 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <button className="w-full bg-[#7F56D9] text-[white] rounded-[8px] py-[12px] px-[20px] mt-5 text-[16px] font-semibold font-[inter] sm:hidden">
          View all posts
        </button>
       
      </div>
    </div>
  );
}

export default Blog;
