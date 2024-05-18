import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Cards from "./templates/Cards";

function TVShow() {
  document.title = "Movie Magic | TV_SHOWS";
  const navigate = useNavigate();
  const [type, setType] = useState("top_rated");
  const [tv, setTV] = useState([]);

  const tvCards = async () => {
    try {
      const { data } = await axios.get(`/tv/${type}`);
      setTV(data.results);
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  useEffect(() => {
    tvCards();
  }, [type]);

  return (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">TV</h1>
        <TopNav />
        <Dropdown
          title="Type"
          options={["popular", "top_rated", "on_the_air", "airing_today"]}
          func={(e) => setType(e.target.value)}
        />
      </div>
      <Cards data={tv} title="tv" />
    </div>
  );
}

export default TVShow;
