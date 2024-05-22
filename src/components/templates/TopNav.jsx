import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import NoImage from "/NoImage.webp";

function TopNav() {
  const [query, setQuery] = useState("");

  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (err) {
      console.log("Error in Topnav :: ERR", err);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full max-w-screen-xl ml-[20vw] h-[5%] relative p-4 flex items-center sticky-top gap-4">
      <label htmlFor="search">
        <IoSearch className="text-3xl ri-search-line hover:cursor-pointer text-white" />
      </label>
      <input
        id="search"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-[50%] rounded-md p-2 bg-transparent text-white outline-none"
      />
      {query.length > 0 && (
        <IoIosCloseCircleOutline
          onClick={() => setQuery("")}
          className="text-3xl hover:cursor-pointer ri-close-circle-line absolute left-[50%] text-white"
        />
      )}
      <div className="w-[50%] max-h-[50vh] z-50 bg-zinc-200 absolute top-[80%] overflow-auto">
        {searches.map(
          (search, id) =>
            search && (
              <Link
                to={`/${search.media_type}/details/${search.id}`}
                key={id}
                className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 gap-3 border-zinc-100"
              >
                <img
                  className="w-20 h-20 object-fit rounded-md"
                  src={
                    search.poster_path || search.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          search.poster_path || search.profile_path
                        }`
                      : NoImage
                  }
                />
                <span>{search.title || search.name}</span>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default TopNav;
