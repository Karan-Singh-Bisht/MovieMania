import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Loader from "./Loader";

function Home() {
  document.title = "Movie Magic | Home Page";

  const [wallpaper, setWallpaper] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data);
      let wallpaperData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(wallpaperData);
      console.log(wallpaperData);
    } catch (err) {
      console.log("Error in Topnav :: ERR", err);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <div className="w-full h-full flex">
        <Sidenav />
        <div className="w-[80%] h-screen">
          <TopNav />
          <Header data={wallpaper} />
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
