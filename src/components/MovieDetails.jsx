import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadMovie } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";
import { removeMovie } from "../store/actions/movieActions";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(removeMovie(id));
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#201F31] text-white p-10">
      <div className="w-full flex items-center">
        <IoCaretBackOutline
          onClick={() => navigate(-1)}
          className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer hover:opacity-[50%]"
        />
      </div>
    </div>
  );
}

export default MovieDetails;
