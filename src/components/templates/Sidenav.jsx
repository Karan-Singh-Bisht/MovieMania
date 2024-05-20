import React from "react";
import { Link } from "react-router-dom";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { BsCameraReelsFill } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function Sidenav() {
  const features = [
    {
      name: "Trending",
      to: "/trending",
      icon: <FaFire />,
    },
    {
      name: "Popular",
      to: "/popular",
      icon: <IoStar />,
    },
    {
      name: "Movies",
      to: "/movie",
      icon: <BsCameraReelsFill />,
    },
    {
      name: "TV Shows",
      to: "/tv",
      icon: <PiTelevisionFill />,
    },
    {
      name: "People",
      to: "/people",
      icon: <BsPeopleFill />,
    },
  ];

  const helps = [
    {
      name: "About Us",
      to: "/about-us",
      icon: <IoBookSharp />,
    },
    {
      name: "Contact Us",
      to: "/contact-us",
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 py-10 px-5">
      <h1 className="font-bold text-white text-3xl flex gap-2 items-center">
        <PiTelevisionSimpleFill />
        <span>Movie Magic</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
          New Feeds
        </h1>
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="flex gap-3 items-center hover:bg-[#6556CD] p-5 hover:text-white rounded-md duration-300"
          >
            {feature.icon}
            {feature.name}
          </Link>
        ))}
      </nav>
      <hr className="mb-5" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
          Website
        </h1>
        {helps.map((help, index) => (
          <Link
            key={index}
            to={help.to}
            className="flex gap-3 items-center hover:bg-[#6556CD] p-5 hover:text-white rounded-md duration-300"
          >
            {help.icon}
            {help.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidenav;

{
  /* <Link className='hover:bg-[#6556CD] p-5 hover:text-white rounded-md'>Trending</Link>
            <Link>Popular</Link>
            <Link>Movies</Link>
            <Link>TV Shows</Link>
            <Link>People</Link> */
}
