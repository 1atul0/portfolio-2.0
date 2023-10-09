import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Work_Detail_Card() {
  return (
    <section id="work-detail-card " className="text-slate-600">
      <Navigation />
      <div className="bg-white rounded-xl ">
        <div className="px-14 pt-14  ">
          <div className="flex space-x-7">
            <h2 className="text-4xl text-black font-semibold ">Works</h2>
            <div className=" relative ">
              <hr className="w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>
          <p className="my-5">
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p>
          My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>
        <div className="px-14 py-5  ">
            <h1 className="text-2xl text-black font-semibold">What I do!</h1>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
export default Work_Detail_Card;
