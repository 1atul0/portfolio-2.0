import React from "react";

function ActivityCard(props) {
  return (
    <section>
      {/* link 1  */}
      <a href={props.link} target="_blank">
        <div
          // onClick={}
          // you must set a gap between where m-3 end else not work
          className={
            "dark:bg-slate-800 rounded-xl p-4 cursor-pointer space-y-4  group m-3 " +
            (props.index % 4 === 0 || props.index%4>2
              ? props.index % 2 === 0
                ? "bg-purple-200"
                : "bg-lime-200"
              : props.index % 2 === 0
              ? "bg-pink-200"
              : "bg-cyan-200")
          }
        >
          <div className="relative space-y-6">
            <div className="rounded-lg overflow-hidden ">
              <img
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                src={props.img}
                alt="pic"
              />
            </div>
            <div>
              <p className="text-sm">{props.description}</p>
              <p className="">{props.title}</p>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
export default ActivityCard;
