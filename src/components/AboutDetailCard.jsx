import React from "react";

import Footer from "./Footer";

function AboutDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black shadow-sm    rounded-2xl text-[#828282] ">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">About</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>
          <p className="my-5 ">
            Hi, I'm Atul Kumar, a  B-Tech graduate who's passionate about
            becoming a great software developer. My primary interests lie in
            competitive programming and development, and I've honed my skills in
            C++ through solving DSA and logic-based problems.
          </p>
          <p>
            Currently, I'm exploring full stack web development using HTML, CSS,
            and JavaScript, along with other frameworks. I've completed several
            projects in web development, and I'm always looking for
            opportunities to gain more experience and work on real-world
            projects.
          </p>
        </div>
        {/* for what i do section  */}
        <div className="px-4 md:px-14 py-5  ">
          <h1 className="text-2xl text-black dark:text-white font-semibold">What I do!</h1>
          {/* for what do box  */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* first box  */}
            <div className="bg-violet-100 dark:bg-slate-900  rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="">
                <svg
                  className="h-6 w-10 my-2 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </div>
              {/* for text  */}
              <div className=" space-y-2">
                <h1 className="text-lg  font-semibold">
                  Mern Stack Developer
                </h1>
                <p className="text-md">
                  I have a good knowledge in frontend as well as backend. I have
                  created lots of projects in Mern Stack.
                </p>
              </div>
            </div>

            {/* second box  */}
            <div className="bg-orange-100 dark:bg-slate-900 rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="">
                <svg
                  className="h-6 w-10 my-2 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                >
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </div>
              {/* for text  */}
              <div className="space-y-2">
                <h1 className="text-lg  font-semibold">
                  Competitive programmer
                </h1>
                <p className="text-md">
                  I have a good knowledge of programming and I have a lots of
                  problems of Data Structure and Algorithm in C++.{" "}
                </p>
              </div>
            </div>

           
           
            
          </div>
          {/* third box  */}
          <div className="px-4 md:px-14 py-5 bg-yellow-100 dark:bg-slate-900 my-3 rounded-xl">I can write quality code and which is easily understandable by Users.</div>
          <div className="px-4 md:px-14 py-5 bg-purple-100 dark:bg-slate-900 my-3 rounded-xl">I does not only develop software but I can deploy on hosting websites.</div>
          
          <div className="px-4 md:px-14 py-5 bg-green-100 dark:bg-slate-900 my-3 rounded-xl">I have ability to deliver good software with creative ideas and I also have ability to work on Team- Coordination </div>

          
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default AboutDetailCard;
