import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" lg:hidden">
      <button onClick={toggleDropdown}>
        <div className="w-10 h-10 bg-red-600 hover:bg-blue-600 shadow-lg rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="p-2 fill-white"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute right-0 mt-10  w-11/12  bg-white border rounded-lg shadow-lg mx-5 
        transition duration-1000 ease-out origin-top min-w-32"
        >
          <ul className="text-gray-500">
            <a
              href="#"
              className="block hover:text-black ml-8 p-2 text-sm font-semibold clicked"
            >
              About
            </a>
            <a href="#" className="block hover:text-black  ml-8 p-2">
              Resume{" "}
            </a>
            <a href="#" className="block hover:text-black  ml-8 p-2">
              Projects
            </a>
            <a href="#" className="block hover:text-black  ml-8 p-2">
              Works
            </a>
            <a href="#" className="block hover:text-black  ml-8 p-2">
              Contact
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
