import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  document.title = "Movie Mania| Popular Page";
  const navigate = useNavigate();
  const [category, setCategory] = useState("tv");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const popularCards = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage((prevState) => prevState + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      popularCards();
    } else {
      setPage(1);
      setPopular([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Popular</h1>
        <TopNav />
        <div className="absolute left-[17vw]">
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute left-[10.5vw] my-2">
        <h1 className="text-4xl text-[#F0B8DD] capitalize">{`${category}`}</h1>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={popularCards()}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular;
