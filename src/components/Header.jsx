import React from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
function Header() {
  const [icon, setIcon] = useState(false);

  // this solution work except refresh
  // const toggleDarkMode = () => {
  // const isDarkMode = !document.documentElement.classList.contains("dark");
  //   document.documentElement.classList.toggle("dark", isDarkMode);
  //   setIcon(isDarkMode);
  //   localStorage.setItem("darkMode", isDarkMode ? "dark" : "light");
  // };

  // // Load the dark mode preference from localStorage on component mount
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode === "dark") {
  //     toggleDarkMode();
  //   }
  // }, []);

  // const [isDarkMode, setIsDarkMode] = useState(true);
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   setIcon(isDarkMode);
  //   // Save user's theme preference in local storage or cookies
  //   localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  // };
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);



  // this solution work after refresh page 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  }, [isDarkMode]);
  

  return (
    <div class="mx-11 mt-5 md:mt-16 mb-10 md:mb-16 lg:mx-32 lg:my-20 flex justify-end space-x-3 ">
      {/* <!-- for dark mode button  --> */}
      <div
        class="w-10 h-10 bg-slate-200 hover:bg-red-400 shadow-lg rounded-full cursor-pointer "
        onClick={toggleDarkMode}
      >
        {!isDarkMode && (
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
        )}

        {isDarkMode && (
          <svg
            className="p-2 hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </div>

      {/* space for dropdown menu  */}
      <Dropdown />
    </div>
  );
}
export default Header;
