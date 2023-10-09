import React from "react";
import Header from "./Header";
import Info from "./Info";

import Navigation from "./Navigation";
import About_Detail_Card from "./About_Detail_Card";
function About() {
  return (
    <section id="about">
      <Header />
      <div className="mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
        {/* w=1/4 is reserver for info  */}
        <Info />

        <div className="xl:w-8/12   h-96 space-y-2">
        <About_Detail_Card />
        </div>
        
      </div>
    </section>
  );
}
export default About;
