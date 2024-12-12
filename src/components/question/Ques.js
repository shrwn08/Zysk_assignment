import React from 'react'
import avatar from "./avatars.svg"

function Ques() {
  return (
    <div className='w-full h-[320px] flex justify-center items-center '>
        <div className='w-[343px] sm:w-4/5 flex flex-col justify-center items-center bg-[#F9FAFB] rounded-[16px]'>
            <img src={avatar} alt='avatar' className='w-[120px]'/>
            <div className='w-[303px] sm:w-4/5 h-[86px] '>
                    <p className='font-[inter] font-semibold text-[20px] text-center'>Still have questions?</p>
                    <p className='font-[inter] font-normal text-[16px] text-center text-[#475467]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </div>
            <button className='h-[48px] w-[]134px bg-[#7F56D9] text-white font-semibold p-3 rounded-[8px]'>Get in touch</button>
        </div> 
    </div>
  )
}

export default Ques