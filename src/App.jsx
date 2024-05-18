import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie, { movieInfoLoader } from "./components/Movie";
import TVShow from "./components/TVShow";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TVdetails from "./components/TVdetails";
import Peopledetails from "./components/Peopledetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-[100%] overflow-x-hidden bg-[#201F31] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movie />} /> //Learn how to use
          loader.
          <Route path="/movie/details/:id" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TVShow />} />
          <Route path="/tv/details/:id" element={<TVdetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/details/:id" element={<Peopledetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
