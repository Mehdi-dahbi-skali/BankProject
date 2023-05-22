import React from 'react'
import { bank, padlock, padlock2,twoFactor } from "../assets";

const More = () => {
  return (
    <>
    <div className="w-full mt-12 flex flex-col items-center ">
        <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
          <img src={padlock} alt="" className="m-auto" />
        </div>
        <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">Our dedicated fraud  and security teams work
          to keep your money safe</p>
      </div>
      <div className="w-full mt-6 flex flex-col items-center ">
        <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
          <img src={twoFactor} alt="" className="m-auto" />
        </div>
        <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">Our dedicated fraud  and security teams work
          to keep your money safe</p>
      </div>
      <div className="w-full mt-6 flex flex-col items-center ">
        <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
          <img src={bank} alt="" className="m-auto" />
        </div>
        <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">Our dedicated fraud  and security teams work
          to keep your money safe</p>
      </div>
      <div className="w-full mt-6 flex flex-col items-center ">
        <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
          <img src={padlock2} alt="" className="m-auto" />
        </div>
        <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">Our dedicated fraud  and security teams work
          to keep your money safe</p>
      </div>
    </>
  )
}

export default More