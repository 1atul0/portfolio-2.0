import React from "react";
import Footer from "./Footer";
import ActivityCard from "./ActivityCard";
import ActivityDetails from "./ActivityDetails.js";

function WorkDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black rounded-2xl dark:text-[#a6a6a6]">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">
              Activities
            </h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* adding link to Activities page  */}

          <div className="grid sm:grid-cols-2 my-4">
            {ActivityDetails.map((ActivityDetail, index) => (
              <ActivityCard
                index={index}
                title={ActivityDetail.title}
                description={ActivityDetail.description}
                img={ActivityDetail.image}
                link={ActivityDetail.link}
              />
            ))}
          </div>
        </div>

        {/* for adding Certification courses  */}
        <div className="px-14 py-5  ">
          <h1 className="text-2xl text-black font-semibold flex space-x-2">
            <span className="">
              <svg
                className="h-8 fill-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8c10.7 13.8 19.9 29.6 19.9 47c0 29.9-24.3 54.2-54.2 54.2H112C50.1 256 0 306.1 0 368c0 20.9 13.4 38.7 32 45.3V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V413.3c18.6-6.6 32-24.4 32-45.3c0-61.9-50.1-112-112-112H366.2c-29.9 0-54.2-24.3-54.2-54.2zM416 416v32H96V416H416z" />
              </svg>
            </span>
            <span className="dark:text-white">Certification Courses</span>
          </h1>

          {/* add first Certification course  */}
          <a href="https://drive.google.com/file/d/15CX4p6NVs_WehrSqJ9jtKshJkVDNEvGl/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">Web Development Bootcamp by Angela Yu (Udemy)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1HEnt6RFiSaPSMnz7utrT1qUeV3tm-k2I/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">Database Management System (NPTEL)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1dr_NBuJPWWDwe-fN0UsDCMerR4Jn2GkD/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">C++ (Spoken Tutorial IIT Bombay)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1ex3Vvdj943Nt-gP897KiTBm8KeW7Mt73/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">Java (Spoken Tutorial IIT Bombay)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/1oQdYeKMzqjLzSaRhQpaee0zDDBZ1gsFy/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-pink-100 dark:bg-slate-900 my-3 rounded-xl">Python (Cisco Netacad)- <span className="text-blue-400">Certificate link</span> </div></a>
          <a href="https://drive.google.com/file/d/15OgPFxPhSS4NBPQDzQ6TXQ5YNHa-pCGk/view?usp=sharing" target="_blank"><div className="px-4  py-5 bg-red-100 dark:bg-slate-900 my-3 rounded-xl">C language (Cisco Netacad)- <span className="text-blue-400">Certificate link</span> </div></a>
          
          
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default WorkDetailCard;
