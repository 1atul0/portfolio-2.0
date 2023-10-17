import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import About_Detail_Card from "./components/About_Detail_Card";
import Contact_Detail_Card from "./components/Contact_Detail_Card";
import Project_Detail_Card from "./components/Project_Detail_Card";
import Work_Detail_Card from "./components/Work_Detail_Card";
import Resume_Detail_Card from "./components/Resume_Detail_Card";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <section id="about">
                <Header />
                <div className="mx-3 md:mx-6 mb-5  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12    space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <About_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/about"
            element={
              <section id="about">
                <Header />
                <div className="mx-3 md:mx-6 mb-5  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12   space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <About_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/contact"
            element={
              <section id="contact">
                <Header />
                <div className="mx-3 md:mx-6 mb-5 xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12   space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <Contact_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/project"
            element={
              <section id="project">
                <Header />
                <div className="mx-3 md:mx-6 mb-5  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12   space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <Project_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/work"
            element={
              <section id="work">
                <Header />
                <div className="mx-3 md:mx-6 mb-5  xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12  space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <Work_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/resume"
            element={
              <section id="resume">
                <Header />
                <div className="mx-3 md:mx-6 mb-5 xl:mt-60 xl:flex space-y-8 xl:space-x-8 xl:space-y-0 ">
                  {/* w=1/4 is reserver for info  */}
                  <Info />

                  <div className="xl:w-8/12  space-y-2">
                    <section id="about-detail-card " className="text-slate-600">
                      <Navigation />
                      <Resume_Detail_Card />
                    </section>
                  </div>
                </div>
              </section>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
