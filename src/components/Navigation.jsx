// Navigation.js
import React from "react";
import Navbutton from "./Navbutton";
import { useState } from "react";
import {  useLocation } from "react-router-dom";


function Navigation() {
  const { pathname } = useLocation();
  const [activeButton, setActiveButton] = useState(-1);
  
  

  const svgs = [
    //about svg
    <svg
      className={"fill-gray-500 mx-auto w-6 h-6   group-hover:fill-white   "+(activeButton===0?"fill-white":"")}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>,
  
    //resume svg
    <svg
      className={"fill-gray-500 mx-auto w-6 h-6   group-hover:fill-white "+(activeButton===1?"fill-white":"")}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
    >
      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>,
  
    //project svg
    <svg
      className={"fill-gray-500 mx-auto w-6 h-6   group-hover:fill-white "+(activeButton===2?"fill-white":"")}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 576 512"
    >
      <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" />
    </svg>,
  
    //work svg
    <svg
      className={"fill-gray-500 mx-auto w-6 h-6   group-hover:fill-white "+(activeButton===3?"fill-white":"")}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
    </svg>,
    //contact svg
    <svg
      className={"fill-gray-500 mx-auto w-6 h-6   group-hover:fill-white "+(activeButton===4?"fill-white":"")}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
    </svg>,
  ];
  
  



  const infos = [
    { route: "/", name: "About", svgfile: svgs[0] },
    { route: "/resume", name: "Resume", svgfile: svgs[1] },
    { route: "/project", name: "Projects", svgfile: svgs[2] },
    { route: "/work", name: "Activities", svgfile: svgs[3] },
    { route: "/contact", name: "Contact", svgfile: svgs[4] },
  ];
  const  foundActiveButton = infos.findIndex((info) => info.route === pathname);
  if (foundActiveButton !== activeButton) {
    setActiveButton(foundActiveButton);
  }



  return (
    <div className="">
      <nav className=" hidden xl:flex  justify-end mb-6">
        <ul className="flex  space-x-4 bg-white dark:bg-black  shadow-sm dark:text-[#a6a6a6] rounded-2xl max-w-[68%] p-7 ">
          {infos.map((info, index) => (
            <Navbutton
              key={index}
              route={info.route}
              name={info.name}
              svgfile={info.svgfile}
              onclick={()=>setActiveButton(index)}
              isClicked={index === activeButton}
            />
          ))}

          
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
