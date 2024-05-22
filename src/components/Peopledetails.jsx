import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SiWikipedia } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import Loader from "./Loader";
import { BsTwitterX } from "react-icons/bs";
import "./TrendingCards.css"; // Import CSS file for component styling
import { asyncloadPeople, removePeople } from "../store/actions/peopleActions";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import NoImage from "/NoImage.webp";
import { PiTelevisionSimpleFill } from "react-icons/pi";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(asyncloadPeople(id)); //dispatch = call
    return () => {
      dispatch(removePeople());
    };
  }, [id]);

  // const convertMinutesToHours = (num) => {
  //   let hours = Math.floor(num / 60);
  //   let minutes = num % 60;
  //   return `${hours}h ${minutes}m`;
  // };

  return info ? (
    <div className="w-full h-screen relative bg-[#201F31] text-white py-10 px-[5%]">
      {/* Part 1 navigation */}
      <nav className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate("/person")}
          className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
        />
        <PiTelevisionSimpleFill
          onClick={() => navigate("/")}
          className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
        />
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full flex mt-[2vw] gap-2 p-5 flex-col">
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-2 w-[18vw]">
            <img
              className="h-[48vh] w-[16vw] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${info[0].detail.profile_path}`}
              alt="image"
            />
            <hr className="mt-4" />
            <div className="text-3xl text-gray-400 flex flex-start gap-5 w-[15vw] h-[5vw] items-center">
              {info[0].externalId.wikidata_id && (
                <a
                  className="hover:text-white"
                  href={`https://www.wikidata.org/wiki/${info[0].externalId.wikidata_id}`}
                >
                  <SiWikipedia />
                </a>
              )}
              {info[0].detail.homepage && (
                <a className="hover:text-white" href={info[0].detail.homepage}>
                  <FaExternalLinkAlt />
                </a>
              )}
              {info[0].externalId.instagram_id && (
                <a
                  className="hover:text-white"
                  href={`https://www.instagram.com/${info[0].externalId.instagram_id}`}
                >
                  <FaInstagram />
                </a>
              )}
              {info[0].externalId.imdb_id && (
                <a
                  className="hover:text-white"
                  href={`https://www.imdb.com/name/${info[0].externalId.imdb_id}`}
                >
                  <FaImdb />
                </a>
              )}
              {info[0].externalId.twitter_id && (
                <a
                  className="hover:text-white"
                  href={`https://www.imdb.com/name/${info[0].externalId.twitter_id}`}
                >
                  <BsTwitterX />
                </a>
              )}
            </div>
            <h1 className="text-gray-400 font-black text-3xl">Person Info</h1>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">Known For</h2>
              <h3 className="text-md normal-case text-gray-400">
                {info[0].detail.known_for_department}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">Gender</h2>
              <h3 className="text-md normal-case text-gray-400">
                {info[0].detail.gender == "1" ? "Female" : "Male"}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">Birthday</h2>
              <h3 className="text-md normal-case text-gray-400">
                {info[0].detail.birthday}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">Deathday</h2>
              <h3 className="text-md normal-case text-gray-400">
                {info[0].detail.deathday
                  ? info[0].detail.deathday
                  : "Still Alive"}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">
                Place Of Birth
              </h2>
              <h3 className="text-md normal-case text-gray-400">
                {info[0].detail.place_of_birth}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-400 font-black text-xl">
                Also Known As
              </h2>
              <div className="flex flex-wrap gap-2">
                {info[0].detail.also_known_as.map((item, index) => (
                  <h3 key={index} className="text-md normal-case text-gray-400">
                    {item},
                  </h3>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-6xl font-black text-gray-400">
              {info[0].detail.name}
            </h1>
            <div className="w-[80%] text-gray-400">
              <h1 className="text-2xl font-black mb-2">Biography</h1>
              <p className="normal-case text-sm text-gray-400">
                {info[0].detail.biography}
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-gray-400 font-black">Known For</h1>
              <div className="flex overflow-x-auto overflow-y-hidden h-full w-full flex-wrap">
                {info[0].combinedCredits.cast.map((item, index) => (
                  <Link
                    to={`/${item.media_type || title}/details/${item.id}`}
                    key={index}
                    className="shadow-inner hover:bg-[#2B2B3C] hover:cursor-pointer relative w-[15vw] h-[20vw] flex flex-col p-2 rounded-md"
                  >
                    {item.backdrop_path || item.poster_path ? (
                      <img
                        className="h-[60%] rounded-t-md"
                        src={`https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.poster_path
                        }`}
                        alt="image"
                      />
                    ) : (
                      <img className="h-[60%] rounded-t-md" src={NoImage} />
                    )}
                    <div className="px-1 h-[40%] py-2 flex flex-col gap-4">
                      <div className="h-[50%]">
                        <h1 className="text-white text-md font-semibold">
                          {item.name || item.original_title}
                        </h1>
                      </div>
                      <div className="h-[25%]">
                        <p className="w-full text-white normal-case text-xs">
                          {item.overview.slice(0, 100)}
                          {item.overview.length > 0 && (
                            <span className="text-blue-400">...more</span>
                          )}
                        </p>
                      </div>
                      <div className="flex gap-4 my-4 items-center h-[25%]">
                        <p className="text-white flex gap-2 text-sm items-center">
                          <FaCalendarAlt />
                          {item.release_date || item.first_air_date}
                        </p>
                        <p className="text-white uppercase text-sm">
                          {item.media_type}
                        </p>
                        {item.adult ? (
                          <p className="text-white text-sm">
                            <NoImage />
                          </p>
                        ) : (
                          <p className="text-white text-sm">PG</p>
                        )}
                      </div>
                      <div className="flex text-white font-black items-center justify-center text-md absolute w-[2.5vw] h-[2.5vw] right-2 bottom-2 bg-yellow-500 rounded-full">
                        <h1 className="">
                          {(item.vote_average * 10).toFixed() + "%"}
                        </h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
