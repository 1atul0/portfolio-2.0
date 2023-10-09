import React from "react";
import Info from "./Info";
import Header from "./Header";
import Resume_Detail_Card from "./Resume_Detail_Card";
function Resume() {
  return (
    <section id="resume">
      <Header />
      <div className="mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
        {/* w=1/4 is reserver for info  */}
        <Info />

        <div className="xl:w-8/12   h-96 space-y-2">
          <Resume_Detail_Card />
        </div>
      </div>
    </section>
  );
}
export default Resume;
