import React from "react";
import { Link } from "react-router-dom";
import NoImage from "/NoImage.webp";

function PeopleCards({ data, title }) {
  return (
    <div className="mt-4 w-full p-10 flex gap-5 flex-wrap justify-center">
      {data.map((item, id) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          key={id}
          className="shadow-inner hover:bg-[#2B2B3C] hover:cursor-pointer w-[15vw] h-[23vw] flex flex-col p-2 rounded-md"
        >
          {item.poster_path || item.profile_path ? (
            <img
              className="h-[90%] object-cover rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${
                item.profile_path || item.poster_path
              }`}
              alt="image"
            />
          ) : (
            <img
              className="h-[90%] object-cover rounded-t-md"
              src={NoImage}
              alt="image"
            />
          )}
          <div className="w-full">
            <h1 className="text-gray-400 text-2xl px-1 py-3 font-bold">
              {item.original_name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PeopleCards;
