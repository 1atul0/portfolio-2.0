// Navigation.js
import React from "react";
import Navbutton from "./Navbutton";
import svgs from "./svgfile";
import { useState } from "react";

function Navigation() {
  const [clickedButton, setClickedButton] = useState(0);
//   const [activeRoute,setActiveRoute]=useState("/");

  const infos = [
    { route: "/", name: "About", svgfile: svgs[0] },
    { route: "/resume", name: "Resume", svgfile: svgs[1] },
    { route: "/project", name: "Projects", svgfile: svgs[2] },
    { route: "/work", name: "Works", svgfile: svgs[3] },
    { route: "/contact", name: "Contact", svgfile: svgs[4] },
  ];

  const handleButtonClick = (index) => {
    // console.log("Button clicked:", index);
    setTimeout(() => {
        setClickedButton(index);
      }, 0);
    // setClickedButton(index);
    // setActiveRoute(route);
  };


  return (
    <div className="">
      <nav className=" hidden xl:flex  justify-end mb-6">
        <ul className="flex  space-x-4 bg-white rounded-xl max-w-[65%] p-7 ">
          {infos.map((info, index) => (
            <Navbutton
              key={index}
              route={info.route}
              name={info.name}
              svgfile={info.svgfile}
              onClick={() => setClickedButton(index)}
              isClicked={index ===clickedButton}
            />
          ))}

          {/* first link  */}
          {/* <Navbutton route="/" name="About" svgfile={svgs[0]} /> */}

          {/* second link  */}
          {/* <Navbutton route="/resume" name="Resume" svgfile={svgs[1]} /> */}

          {/* third link  */}

          {/* <Navbutton route="/project" name="Projects" svgfile={svgs[2]} /> */}
          {/* fourth link*/}
          {/* <Navbutton route="/work" name="Works" svgfile={svgs[3]} /> */}
          {/* fifth link  */}
          {/* <Navbutton route="/contact" name="Contact" svgfile={svgs[4]} /> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
