import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Cards from "./templates/Cards";

function Movie() {
  document.title = "Movie Magic | Movie";
  const navigate = useNavigate();
  const [type, setType] = useState("popular");
  const [movie, setMovie] = useState([]);

  const movieCards = async () => {
    try {
      const { data } = await axios.get(`/movie/${type}`);
      setMovie(data.results);
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  useEffect(() => {
    movieCards();
  }, [type]);

  return (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate("/")}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer hover:opacity-[50%]"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Movies</h1>
        <TopNav />
        <Dropdown
          title="Type"
          options={["popular", "top_rated", "upcoming"]}
          func={(e) => setType(e.target.value)}
        />
      </div>
      <Cards data={movie} title="movie" />
    </div>
  );
}

export default Movie;
