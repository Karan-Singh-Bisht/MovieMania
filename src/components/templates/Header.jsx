import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import NoImage from "/icons8-18-plus-48.png";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "50% 15%",
        backgroundSize: "cover",
      }}
      className="w-full h-[50%] flex flex-col justify-end items-start px-[5%] py-[4%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white mb-2 max-sm:text-4xl">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] normal-case text-white mb-2 text-balance max-sm:hidden">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <div className="flex gap-4 max-sm:hidden">
        <p className="text-white flex gap-2 items-center">
          <FaCalendarAlt />
          {data.release_date || data.first_air_date}
        </p>
        <p className="text-white uppercase">{data.media_type}</p>
        {data.adult ? (
          <p className="text-white">
            <NoImage />
          </p>
        ) : (
          <p className="text-white">PG</p>
        )}
      </div>
      <div className="flex gap-4">
        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="p-3 bg-purple-400 hover:opacity-[0.8] mt-5 rounded-md text-white font-semibold"
        >
          Watch Trailer
        </Link>
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="p-3 bg-gray-400 hover:opacity-[0.8] mt-5 rounded-md text-white font-semibold"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Header;
