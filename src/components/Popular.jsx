import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Cards from "./templates/Cards";

function Popular() {
  document.title = "Movie Magic | Popular Page";
  const navigate = useNavigate();
  const [category, setCategory] = useState("tv");
  const [popular, setPopular] = useState([]);

  const popularCards = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular`);
      setPopular(data.results);
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  useEffect(() => {
    popularCards();
  }, [category]);

  return (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Popular</h1>
        <TopNav />
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="absolute left-[10.5vw] my-2">
        <h1 className="text-4xl text-[#F0B8DD] capitalize">{`${category}`}</h1>
      </div>
      <Cards data={popular} title={category} />
    </div>
  );
}

export default Popular;
