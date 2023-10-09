import React from "react";
import { Link } from "react-router-dom";
function Navbutton(props) {
  return (
    <section>
      <li className={'toggle-button  bg-gray-300 hover:bg-red-500 rounded-lg text-center h-[84px] w-[84px]  hover:text-white  group flex justify-center '+(props.isClicked?'bg-red-400 text-white':'')}
      onClick={props.onClick}>
        <Link to={props.route}>
          <div className="p-4">
            {props.svgfile}
            <span className="text-sm">{props.name }</span>
          </div>
        </Link>
      </li>
    </section>
  );
}
export default Navbutton;
