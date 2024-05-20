import React from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden bg-[#201F31] h-screen py-10 px-[5%]">
      <IoCaretBackOutline
        onClick={() => navigate(-1)}
        className="text-[#F0B8DD] text-5xl mr-2 hover:cursor-pointer hover:opacity-[50%]"
      />
      <div className="h-full text-5xl text-gray-400 items-center justify-center gap-3 flex flex-col">
        <h1>404</h1>
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
