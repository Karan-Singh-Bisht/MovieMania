import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import PeopleCards from "../components/PeopleCards";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  document.title = "Movie Magic | People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const peopleCard = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage((prevState) => prevState + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Error in People :: ERR", err);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      peopleCard();
    } else {
      setPage(1);
      setPeople([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return (
    <div className="w-full h-screen p-10 relative">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate("/")}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer"
        />
        <h1 className="text-4xl text-[#F0B8DD] font-semibold">Person</h1>
        <TopNav />
      </div>
      <InfiniteScroll
        loader={<h1>Loading...</h1>}
        hasMore={hasMore}
        next={peopleCard()}
        dataLength={people.length}
      >
        <PeopleCards data={people} title="person" />
      </InfiniteScroll>
    </div>
  );
}

export default People;
