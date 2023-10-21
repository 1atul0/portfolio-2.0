import React, { useState } from "react";

function ProjectCard(props) {
  // i think usestate should added in projectdetildcard
  const [isCardClick, setIsCardClick] = useState(false);
  const handleClick = () => {
    setIsCardClick(true);
  };

  //   for closing the popup
  const closeModal = () => {
    setIsCardClick(false);
  };

  return (
    <section>
      <div
        onClick={handleClick}
        className="bg-pink-200 rounded-xl p-4 cursor-pointer space-y-4  group m-3"
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
            <p className="text-xs">{props.tag}</p>
            <p className="text-black">{props.title}</p>
          </div>
        </div>
      </div>

      {/* is card get clicked then float this message  */}
      {isCardClick && (
        <div className=" fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed bg-white dark:bg-black shadow-md mx-2 lg:w-7/12 lg:mx-auto inset-0 flex p-4  justify-center z-51 my-16 rounded-xl  ">
            <div className="absolute bg-transparent  border-1 border-white rounded-full -top-12  right-4 ">
                {/* button for handle close  */}
              <button
                onClick={closeModal}
                className="rotate-90 transform origin-center transition-transform hover:rotate-0 duration-500"
              >
                <svg
                  className="h-10 text-white hover:text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
             {/* put your content here  */}
            <div className="overflow-y-auto">
              <p>{props.description}</p>
              <p>{props.features}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default ProjectCard;
