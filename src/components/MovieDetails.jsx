import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadMovie } from "../store/actions/movieActions";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { removeMovie } from "../store/actions/movieActions";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SiWikipedia } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import NoImage from "/NoImage.webp";
import "./TrendingCards.css"; // Import CSS file for component styling
import { PiTelevisionSimpleFill } from "react-icons/pi";

function MovieDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncloadMovie(id)); //dispatch = call
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  const convertMinutesToHours = (num) => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours}h ${minutes}m`;
  };

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(https://image.tmdb.org/t/p/original/${info[0].detail.backdrop_path})`,
        backgroundPosition: "50% 15%",
        backgroundSize: "cover",
      }}
      className="w-full h-screen relative bg-[#201F31] text-white py-10 px-[5%]"
    >
      {/* Part 1 navigation */}
      <nav className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
        />
        <PiTelevisionSimpleFill
          onClick={() => navigate("/")}
          className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
        />
        <div className="text-3xl text-gray-400 flex gap-5 w-[15vw] h-[5vw] items-center justify-start">
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
          {info[0].externalId.imdb_id && (
            <a
              className="hover:text-white"
              href={`https://www.imdb.com/title/${info[0].externalId.imdb_id}`}
            >
              <FaImdb />
            </a>
          )}
        </div>
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full flex mt-[2vw] gap-2 p-5 flex-col">
        <div className="flex gap-5 w-full">
          <img
            className="h-[45vh] w-[15vw] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-t-md "
            src={`https://image.tmdb.org/t/p/original/${
              info[0].detail.poster_path || info[0].detail.backdrop_path
            }`}
            alt="image"
          />
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-6xl font-black text-white">
              {info[0].detail.title || original_title}
              <small className="text-5xl font-semibold ml-1 text-gray-200">
                ({info[0].detail.release_date.slice(0, 4)})
              </small>
            </h1>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="border text-sm p-1 border-gray-400">UA</span>
              <p className="text-white">{info[0].detail.release_date}</p>
              <div className="w-[0.3vw] h-[0.3vw] mx-1 rounded-full bg-white"></div>
              {info[0].detail.genres.map((item, index) => (
                <p key={index} className="normal-case">
                  {item.name}
                </p>
              ))}
              <div className="w-[0.3vw] h-[0.3vw] mx-1 rounded-full bg-white"></div>
              <p className="normal-case">
                {convertMinutesToHours(info[0].detail.runtime)}
              </p>
            </div>
            <div className="flex items-center gap-3 text-[1vw] my-2">
              <div className="w-[4vw] h-[4vw] flex items-center text-black text-[1.5vw] font-black justify-center rounded-full bg-yellow-300">
                {(info[0].detail.vote_average * 10).toFixed() + "%"}
              </div>
              <h2 className="font-semibold">
                User <br /> Score
              </h2>
            </div>
            <h1 className="text-gray-200 text-[1vw] tracking-wide">
              {info[0].detail.tagline}
            </h1>
            <div className="w-[68%]">
              <h1 className="text-2xl font-black mb-2">Overview</h1>
              <p className="normal-case">{info[0].detail.overview}</p>
            </div>
            <p>
              <span className="normal-case font-semibold">
                Spoken Languages<span className="mx-1">:</span>
              </span>
              {info[0].detail.spoken_languages.map((item, index) => (
                <span className="mr-2 normal-case" key={index}>
                  {item.english_name}
                </span>
              ))}
            </p>
            {info[0].videos && info[0].videos.key && (
              <Link
                to={`${pathname}/trailer`}
                className="p-3 bg-purple-400 hover:opacity-[0.8] mt-2 w-[10%] rounded-md text-white font-semibold"
              >
                Watch Trailer
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Part-3 Buy or Rent */}

      <div className="w-full h-[17vw] p-5">
        <div className="flex flex-col ">
          {info[0].watchProvider && info[0].watchProvider.flatrate && (
            <h1 className="font-bold text-2xl text-gray-200 mb-1">Watch On</h1>
          )}
          <div className="flex gap-5 items-center">
            {info[0].watchProvider &&
              info[0].watchProvider.flatrate &&
              info[0].watchProvider.flatrate.map((item, index) => (
                <img
                  key={index}
                  title={item.flatrate}
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                  alt="image"
                  className="hover:cursor-pointer mb-2 rounded-md w-[3vw] h-[3vw]"
                />
              ))}
          </div>
        </div>
        {info[0].watchProvider && info[0].watchProvider.rent && (
          <h1 className="font-bold text-2xl text-gray-200 mb-2">Rent</h1>
        )}
        <div className="flex gap-5 items-center">
          {info[0].watchProvider &&
            info[0].watchProvider.rent &&
            info[0].watchProvider.rent.map((item, index) => (
              <img
                key={index}
                title={item.provider_name}
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                alt="image"
                className="hover:cursor-pointer rounded-md w-[3vw] h-[3vw]"
              />
            ))}
        </div>
        {info[0].watchProvider && info[0].watchProvider.buy && (
          <h1 className="font-bold text-2xl text-gray-200 my-2">Buy</h1>
        )}
        <div className="flex gap-5 items-center">
          {info[0].watchProvider &&
            info[0].watchProvider.buy &&
            info[0].watchProvider.buy.map((item, index) => (
              <img
                key={index}
                title={item.provider_name}
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                alt="image"
                className="hover:cursor-pointer rounded-md w-[3vw] h-[3vw]"
              />
            ))}
        </div>
      </div>

      {/* part 4 Recommendation */}
      <div className="mt-[1vw]">
        <h1 className="my-3 font-black text-4xl">Recommendations</h1>
        <div className="h-[21vw] flex overflow-x-auto gap-5">
          {info[0].recommendation.length > 0
            ? info[0].recommendation.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.media_type}/details/${item.id}`} // Example: Link to details page
                  className="trending-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.poster_path
                    })`,
                  }}
                >
                  <div className="trending-card-content">
                    <h2 className="trending-card-title">
                      {item.name || item.original_title}
                    </h2>
                    <div className="trending-card-info">
                      <p className="media-type">{item.media_type}</p>
                      <p className="rating">
                        {item.adult ? <NoImage /> : "PG"}
                      </p>
                    </div>
                    <p className="release-date">
                      <FaCalendarAlt />
                      {item.release_date || item.first_air_date}
                    </p>
                  </div>
                </Link>
              ))
            : info[0].similar.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.media_type}/details/${item.id}`} // Example: Link to details page
                  className="trending-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.poster_path
                    })`,
                  }}
                >
                  <div className="trending-card-content">
                    <h2 className="trending-card-title">
                      {item.name || item.original_title}
                    </h2>
                    <div className="trending-card-info">
                      <p className="media-type">{item.media_type}</p>
                      <p className="rating">
                        {item.adult ? <NoImage /> : "PG"}
                      </p>
                    </div>
                    <p className="release-date">
                      <FaCalendarAlt />
                      {item.release_date || item.first_air_date}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
