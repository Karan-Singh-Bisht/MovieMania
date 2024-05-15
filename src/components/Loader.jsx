import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-t-black border-gray-200 h-16 w-16"></div>
    </div>
  );
};

export default Loader;
