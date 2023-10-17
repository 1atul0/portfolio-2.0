import React from "react";

import Footer from "./Footer";

function Project_Detail_Card() {
  return (
    <section >
      
      <div className="bg-white dark:bg-black rounded-xl dark:text-white ">
        <div className="px-4 md:px-14 pt-14  ">
          {/* title  */}
          <div className="flex md:space-x-7 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Projects</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* projects  */}
          <div className="my-5 space-y-7"  id="project"> 
            {/* for project navigation  */}
            <div className="flex justify-end space-x-7">
              <span className="cursor-pointer hover:text-red-500 font-semibold">All</span>
              <span className="cursor-pointer hover:text-red-500 font-semibold">Frontend</span>
              <span className="cursor-pointer hover:text-red-500 font-semibold">Full-Stack</span>
              <span className="cursor-pointer hover:text-red-500 font-semibold">Design</span>
            </div>

            {/* for project cards  */}
            <div className="grid sm:grid-cols-2 bg-purple-100 sm:space-x-2">
              <div className="bg-red-400">1</div>
              <div className="bg-red-400">1</div>
            </div>
          </div>
          
        </div>
        
        <Footer/>
      </div>
    </section>
  );
}
export default Project_Detail_Card;
