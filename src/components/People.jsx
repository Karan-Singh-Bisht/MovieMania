import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackOutline } from "react-icons/io5";
import TopNav from "./templates/TopNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import PeopleCards from "../components/PeopleCards";

function People() {
  document.title = "Movie Magic | People";
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const peopleCard = async () => {
    try {
      const { data } = await axios.get(`/person/popular`);
      setPeople(data.results);
    } catch (err) {
      console.log("Error in People :: ERR", err);
    }
  };

  useEffect(() => {
    peopleCard();
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
      <PeopleCards data={people} title="person" />
    </div>
  );
}

export default People;
