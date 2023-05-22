import React, { useState } from 'react'
import { transfer,warning } from "../assets";

function Form() {
    const [transfer, settransfer] = useState("22.31");
    
    const handeltransfer = (event)=>{
        const val = event.target.value;
        if(val ==="Quick"){
            settransfer("22.31");
        }else if(val == "Low"){
            settransfer("17.70");
        }else if(val=="Eazy"){
            settransfer("18.84");
        }
    }

    return (
        <>
            <div className=" p-5 ">
                <p className="font-poppins font-extrabold text-[29px] leading-[30px] text-[#0A66C2]">Save up to 9 times<br />on international<br />money transfers.</p>
                <p className="mt-4 w-[230px] h-[74px] font-poppins font-bold text-[9px] leading-[14px] text-[#000000]">Sending money shouldn't cost that much, so we created Wise to help you save money when transferring and exchanging internationally. We charge as little as possible: currently minimal fees, and one day, none at all.</p>
                <div className="w-[300px] h-[329px] mt-3 ">

                    <div className="flex items-center justify-between">
                        <div className=" flex flex-col items-end w-fit">
                            <input type="text" className="w-[97px] h-[18px] bg-transparent font-poppins font-bold text-[10px] leading-[15px] text-[#000000] opacity-30 outline-none border-b-2" placeholder="You send exactly" />
                            <select className="w-fit font-poppins font-extrabold italic text-[8.53125px] leading-[13px] bg-transparent opacity-70">
                                <option value="Eur">Eur</option>
                            </select>
                        </div>
                        <img src={transfer} alt="" />
                        <div className=" flex flex-col items-end w-fit">
                            <input type="text" className="w-[118px] h-[18px] bg-transparent font-poppins font-bold text-[7px] leading-[15px] text-[#000000] opacity-30 outline-none border-b-2" placeholder="The beneficiary receives approx." />
                            <select className="w-fit font-poppins font-extrabold italic text-[8.53125px] leading-[13px] bg-transparent opacity-70">
                                <option value="Eur">MAD</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-between my-4">
                        <div className=" flex flex-col items-end w-fit">
                            <p className="font-poppins font-bold text-20 leading-30 text-black text-opacity-50 ml-2" >{transfer}</p>
                        </div>
                        <div className=" flex flex-col items-end w-fit">
                            <select onChange={handeltransfer} className="w-fit h-[18px] bg-transparent font-poppins font-bold text-[10px] leading-[15px] text-[#000000] opacity-30 outline-none border-b-2"  >
                                <option value="Quick">Quick Transfer</option>
                                <option value="Low">Low cost transfer fees </option>
                                <option value="Eazy">Easy transfer</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex items-center justify-between my-4">
                        <div className=" flex flex-col items-end w-fit">
                            <p className="font-poppins font-bold text-20 leading-30 text-black text-opacity-50 ml-2" >22,55</p>
                        </div>

                        <div className=" flex flex-col items-end w-fit">
                            <p className="w-fit h-[18px] bg-transparent font-poppins font-bold text-[10px] leading-[15px] text-[#000000] opacity-30 outline-none border-b-2">Total amount we will Convert</p>
                        </div>

                    </div>

                    <div className="flex items-center justify-between my-4">
                        <div className=" flex flex-col items-end w-fit">
                            <p className="font-poppins font-bold text-20 leading-30 text-black text-opacity-50 ml-2" >22,55</p>
                        </div>

                        <div className=" flex flex-col items-end w-fit">
                            <p className="w-fit h-[18px] bg-transparent font-poppins font-bold text-[10px] leading-[15px] text-[#000000] opacity-30 outline-none border-b-2">Exchange rate (not guarneteed )</p>
                        </div>

                    </div>

                    <div className="flex items-center ml-4 mt-5 ">
                        <img src={warning} alt="" />
                        <p className="font-poppins font-bold text-[7.44px] leading-[15px] opacity-50 text-red-500 ml-2 " >Exchange rates are quite unstable at the moment, so we cannot guarantee this rate.</p>
                    </div>

                    <div className="w-full flex flex-col items-center mt-5">
                        <p className="w-[202px] h-[45px] bg-[#0A66C2] rounded-[19px] text-center pt-4 font-poppins font-bold text-base leading-[15px] text-white">Compare prices</p>
                        <p className="mt-2 w-[202px] h-[45px] bg-white rounded-[19px] text-center pt-4 font-poppins font-bold text-base leading-[15px] text-[#0A66C2]  border-[#0A66C2]  border-solid border-[1px]">Begin</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#D9D9D9] mt-1"></div>
        </>
    )
}

export default Form