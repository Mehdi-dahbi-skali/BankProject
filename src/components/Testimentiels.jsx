import React from 'react'
import { government, padlock, Image } from "../assets";

const Testimentiels = () => {
  return (
    <div className="pl-6 w-full">
    <div className="w-full mt-4 flex flex-col items-center">
      <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
        <img src={government} alt="" className="m-auto" />
      </div>
      <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">Our operations are overseen by Belgium's National Bank for regulation.</p>
    </div>
    <div className="w-full mt-4 flex flex-col items-center ">
      <div className=" w-[67px] h-[67px] bg-[#D9D9D9] rounded-[40px] flex ">
        <img src={padlock} alt="" className="m-auto" />
      </div>
      <p className="w-[221px] h-[28px] font-poppins font-bold text-[9px] leading-[14px] text-center text-[#000000] opacity-80 mt-1">We protect your data with strict standards</p>
    </div>
    <p className="w-full mt-4  font-poppins font-black text-[29px] leading-[30px] text-[#0A66C2] ">What people are<br />saying about us</p>
    <div className="cards w-full h-[223px] mt-4 flex flex-row overflow-x-auto  ">

      <div className=" ml-3 flex-shrink-0  w-[203px] h-full bg-[#1D7EDF] rounded-[20px] flex flex-col items-center ">
        <img src={Image} className="w-[37px] h-[37px] mb-4 mt-7" alt="" />
        <p className="font-poppins font-semibold text-[10.03px] leading-[180%] text-center tracking-[0.02em] text-white" >Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        <div className="stars">
         
        </div>
      </div>

      <div className=" ml-3 flex-shrink-0  w-[203px] h-full bg-[#1D7EDF] rounded-[20px] flex flex-col items-center ">
        <img src={Image} className="w-[37px] h-[37px] mb-4 mt-7" alt="" />
        <p className="font-poppins font-semibold text-[10.03px] leading-[180%] text-center tracking-[0.02em] text-white" >Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        <div className="stars">
         
        </div>
      </div>

      <div className=" ml-3 flex-shrink-0  w-[203px] h-full bg-[#1D7EDF] rounded-[20px] flex flex-col items-center ">
        <img src={Image} className="w-[37px] h-[37px] mb-4 mt-7" alt="" />
        <p className="font-poppins font-semibold text-[10.03px] leading-[180%] text-center tracking-[0.02em] text-white" >Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        <div className="stars">
         
        </div>
      </div>

    </div>
  </div>
  )
}

export default Testimentiels