import React from "react";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div class="mx-11 mt-5 md:mt-16 mb-10 md:mb-16 lg:mx-32 lg:my-20 flex justify-end space-x-3 ">
      {/* <!-- for dark mode button  --> */}
      <div class="w-10 h-10 bg-slate-200 hover:bg-red-400 shadow-lg rounded-full cursor-pointer ">
        <svg
          class="p-2 fill-slate-600 border-none hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>

      {/* space for dropdown menu  */}
    <Dropdown/>
    </div>

     
  );
}
export default Header;
