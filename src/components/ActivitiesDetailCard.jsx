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
        {/* <div className="px-14 py-5  ">
          <h1 className="text-2xl text-black font-semibold">What I do!</h1>
        </div> */}
        <Footer />
      </div>
    </section>
  );
}
export default WorkDetailCard;
