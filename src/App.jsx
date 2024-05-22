import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TVShow from "./components/TVShow";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TVDetails from "./components/TVDetails";
import Peopledetails from "./components/Peopledetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/templates/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-[100%] overflow-x-hidden bg-[#201F31] overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} /> //Learn how to use loader.
          <Route path="/movie/details/:id" element={<MovieDetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<TVShow />} />
          <Route path="/tv/details/:id" element={<TVDetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/person" element={<People />} />
          <Route path="/person/details/:id" element={<Peopledetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
