import { Outlet, Link } from "react-router-dom";
import { menubar } from "../assets";
import { useState } from "react";
import { close } from "../assets";

const Layout = () => {

  const [toogele, settoogele] = useState(false)

  const handelClick = () => {
    if (toogele) {
      settoogele(false);
    } else {
      settoogele(true);
    }
  }


  return (
    <>
      <nav className="w-full p-4 border-b-2 ">
        <ul className="w-full flex justify-between items-center" >
          <li>
            <Link to="/" className="w-20 h-12 italic font-extrabold text-3xl font-poppins text-[#0A66C2] ">Logo</Link>
          </li>
          <img onClick={handelClick} src={menubar} className="w-10 h-4 cursor-pointer" alt="" />
        </ul>
      </nav>

      <div className={`${toogele ? 'visible' : 'hidden'} w-[100%] overflow-hidden h-[100vh] bg-white absolute top-0 p-5`}>
        <img onClick={handelClick} src={close} alt="" className="mt-3 ml-3 cursor-pointer" />
        <div className="flex w-full flex-col mt-7 items-center text-center">
          <p className="m-5 mb-5 border-b-2   font-poppins font-extrabold text-2xl text-[#0A66C2] " >Staff</p>
          <p className="font-poppins font-medium" > Features</p>
          <p className="font-poppins font-medium">Pricing</p>
          <p className="font-poppins font-medium">Aide</p>
          <p className="m-5 mb-5 border-b-2   font-poppins font-extrabold text-2xl text-[#0A66C2] " >Business</p>
        </div>
        <div className="absolute bottom-0  m-auto w-full flex flex-col items-center mt-5">
          <p className="w-[202px] h-[45px] bg-[#0A66C2] rounded-[19px] ml-[-23px] text-center pt-4 font-poppins font-bold text-base leading-[15px] text-white">Sign up</p>
          <p className="mt-2 w-[202px] h-[45px] bg-white rounded-[19px] ml-[-23px] text-center pt-4 font-poppins font-bold text-base leading-[15px] text-[#0A66C2]  border-[#0A66C2]  border-solid border-[1px]">Sign in</p>
        </div>
      </div>
      {!toogele && <Outlet />}


    </>
  )
};

export default Layout;