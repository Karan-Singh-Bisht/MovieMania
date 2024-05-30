import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#201F31] p-10 flex">
      <IoCaretBackOutline
        onClick={() => navigate(-1)}
        className="text-[#F0B8DD] text-5xl mr-10 hover:cursor-pointer hover:opacity-[50%]"
      />
      <div className="text-white text-xl mt-[3vw]">
        <h1 className="text-3xl font-black mb-[2vw]">Contact Details :</h1>
        <h3>
          <b>Phone Number</b> : 8309213719
        </h3>
        <h3>
          <b>Email</b> : MovieMania@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default ContactUs;
