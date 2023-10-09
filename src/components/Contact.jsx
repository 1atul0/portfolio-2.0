import React from "react";
import Header from "./Header";
import Info from "./Info";
import Contact_Detail_Card from "./Contact_Detail_Card";
function Contact(){
    return(
        <section id="contact">
      <Header />
      <div className="mx-6   xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
        {/* w=1/4 is reserver for info  */}
        <Info />

        <div className="xl:w-8/12   h-96 space-y-2">
          <Contact_Detail_Card />
        </div>
      </div>
    </section>
    );
}
export default Contact;