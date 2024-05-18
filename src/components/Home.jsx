import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Loader from "./Loader";
import TrendingCards from "./TrendingCards";
import Dropdown from "./templates/Dropdown";

function Home() {
  document.title = "Movie Magic | Home Page";

  const [wallpaper, setWallpaper] = useState(null);
  const [cards, setCards] = useState(null);
  const [category, setCategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let wallpaperData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(wallpaperData);
    } catch (err) {
      console.log("Error in Topnav :: ERR", err);
    }
  };

  const getCardData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);
      setCards(data.results);
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getCardData();
  }, [category]);

  return wallpaper && cards ? (
    <>
      <div className="w-full h-screen flex">
        <Sidenav />
        <div className="w-[80%] h-screen p-2">
          <TopNav />
          <Header data={wallpaper} />
          <div className="flex justify-between px-10 pt-5 items-center">
            <h1 className="text-4xl mb-4 text-gray-400 font-black">Trending</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <TrendingCards data={cards} />
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
