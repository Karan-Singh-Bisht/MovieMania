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

function TVShow() {
  document.title = "Movie Mania | TV_SHOWS";
  const navigate = useNavigate();
  const [type, setType] = useState("top_rated");
  const [tv, setTV] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const tvCards = async () => {
    try {
      const { data } = await axios.get(`/tv/${type}?page=${page}`);
      if (data.results.length > 0) {
        setTV((prevState) => [...prevState, ...data.results]);
        setPage((prevState) => prevState + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      tvCards();
    } else {
      setPage(1);
      setTV([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [type]);

  return (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate("/")}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">TV</h1>
        <TopNav />
        <div className="absolute left-[13.5vw]">
          <Dropdown
            title="Type"
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            func={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        loader={<h1>Loading...</h1>}
        hasMore={hasMore}
        next={tvCards()}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  );
}

export default TVShow;
