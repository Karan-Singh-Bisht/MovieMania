import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import NoImage from "/NoImage.webp";

function Cards({ data, title }) {
  return (
    <div className="mt-4 w-full p-10 flex gap-5 flex-wrap justify-center">
      {data.map((item, id) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          key={id}
          className="shadow-inner hover:bg-[#2B2B3C] hover:cursor-pointer relative w-[16vw] h-[20vw] flex flex-col p-2 rounded-md"
        >
          {item.backdrop_path || item.poster_path ? (
            <img
              className="h-[60%] rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path
              }`}
              alt="image"
            />
          ) : (
            <img className="h-[60%] rounded-t-md" src={NoImage} />
          )}
          <div className="px-1 h-[40%] py-2 flex flex-col gap-4">
            <div className="h-[50%]">
              <h1 className="text-white text-md font-semibold">
                {item.name || item.original_title}
              </h1>
            </div>
            <div className="h-[25%]">
              <p className="w-full text-white normal-case text-xs">
                {item.overview.slice(0, 100)}
                {item.overview.length > 0 && (
                  <span className="text-blue-400">...more</span>
                )}
              </p>
            </div>
            <div className="flex gap-4 my-4 items-center h-[25%]">
              <p className="text-white flex gap-2 text-sm items-center">
                <FaCalendarAlt />
                {item.release_date || item.first_air_date}
              </p>
              <p className="text-white uppercase text-sm">{item.media_type}</p>
              {data.adult ? (
                <p className="text-white text-sm">
                  <NoImage />
                </p>
              ) : (
                <p className="text-white text-sm">PG</p>
              )}
            </div>
            <div className="flex text-white font-black items-center justify-center text-md absolute w-[2.5vw] h-[2.5vw] right-2 bottom-2 bg-yellow-500 rounded-full">
              <h1 className="">{(item.vote_average * 10).toFixed() + "%"}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
