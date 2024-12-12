import React, { useEffect, useState } from "react";
import Tagline from "./Tagline";
import  HeroImg  from "../../assets/hero.png";
import hero  from "../../assets/hero_for_mobile.png"

function Hero() {
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
    <div className="hero h-[822px] sm:h-[1112px] w-full  flex justify-center items-center ">
      <div className="w-11/12 sm:w-4/5 flex flex-col gap-8">
        <div className="tag-line w-full flex justify-center items-center ">
          <Tagline />
        </div>
        {!isMobile && (
          <div className="image border-t-4 border-r-4 border-l-4 rounded-[12px] border-black overflow-hidden" >
          <img src={HeroImg} alt="hero" />
        </div>
        )}
        {isMobile && (
          <div className="image border-4 rounded-[12px] border-black drop-shadow-md overflow-hidden" >
          <img src={hero} alt="hero" />
        </div>
        )}
        
      </div>
    </div>
  );
}

export default Hero;
