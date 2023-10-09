import React from "react";
import Header from "./Header";
import Project_Detail_Card from "./Project_Detail_Card";

import Info from "./Info";
function Project(){
    return(
        <section id="project">
      <Header />
      <div className="mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
        {/* w=1/4 is reserver for info  */}
        <Info />

        <div className="xl:w-8/12   h-96 space-y-2">
          <Project_Detail_Card />
        </div>
      </div>
    </section>
    );
}
export default Project;