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

function Movie() {
  document.title = "Movie Mania | Movie";
  const navigate = useNavigate();
  const [type, setType] = useState("popular");
  const [movie, setMovie] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const movieCards = async () => {
    try {
      const { data } = await axios.get(`/movie/${type}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage((prevState) => prevState + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Error in Trending :: ERR", err);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      movieCards();
    } else {
      setPage(1);
      setMovie([]);
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
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer hover:opacity-[50%]"
        />

        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Movies</h1>

        <TopNav />
        <div className="absolute left-[16vw]">
          <Dropdown
            title="Type"
            options={["popular", "top_rated", "upcoming"]}
            func={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        loader={<h1>Loading...</h1>}
        hasMore={hasMore}
        next={movieCards()}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  );
}

export default Movie;
