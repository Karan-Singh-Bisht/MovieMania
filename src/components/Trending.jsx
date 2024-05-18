import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "Movie Magic | Trending Page";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);

  const trendCards = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  useEffect(() => {
    trendCards();
  }, [category, duration]);

  return (
    <div className="w-full h-screen p-10">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Trending</h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["all", "tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-10"></div>
        <Dropdown
          title="Duration"
          options={["day", "week"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <Cards data={trending} title={category} />
    </div>
  );
}

export default Trending;
