import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";

function Trailer() {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytTrailer = useSelector((state) => state[category].info[0].videos);
  console.log(ytTrailer);

  const navigate = useNavigate();

  return (
    <div className="w-full flex z-100 absolute top-[0] right-[0] h-screen p-10 bg-[rgba(0,0,0,0.9)] justify-center">
      <IoCaretBackOutline
        onClick={() => navigate(-1)}
        className="text-[#F0B8DD] text-5xl mr-3 hover:cursor-pointer hover:opacity-[50%]"
      />
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytTrailer.key}`}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
      />
    </div>
  );
}

export default Trailer;
