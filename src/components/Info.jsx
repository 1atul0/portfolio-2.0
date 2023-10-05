import React from "react";
import image from "../assets/atul.jpg";
import Socialicon from "./Socialicon";

function Info() {
  return (
    <div className=" mx-6 md:mx-16  xl:mt-60 lg:flex space-y-8 xl:space-x-8 xl:space-y-0">
      <div className="bg-white  xl:w-4/12  rounded-xl py-10 px-7 xl:py-0 xl:px-0">
        {/* for info card */}
        <div className=" rounded-xl px-2 text-center  justify-center">
          <img
            className="xl:-mt-36 h-56 w-56 mb-5 rounded-xl mx-auto "
            src={image}
            alt=""
          />
          <h1 className="box-border  text-xl font-semibold">Atul Kumar</h1>
          <span className="font-medium mt-3 mb-2 inline-block  py-1 px-5 bg-slate-200 rounded-md border-r-2 ">Software Developer</span>
          
          <Socialicon/>

            {/* add info contact like email phone etc  */}
        </div>
      </div>
      <div className="bg-pink-200 xl:w-8/12 h-96">2</div>
    </div>
  );
}
export default Info;
