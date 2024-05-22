import React from "react";

function Dropdown({ title, options, func }) {
  return (
    <div>
      <select
        className="w-[8vw] py-1 px-2 bg-[#2B2B3C] ease-linear text-gray-400 active:text-white outline-none rounded-md"
        name="option"
        onChange={func}
        id="option"
        defaultValue="0"
      >
        <option className="my-2" value="0" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option className="p-1 my-3" key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
