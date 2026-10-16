import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice.js";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    
    setText("");
  };
  return (
    <div>
      <form
        className="flex flex-col gap-3 bg-gray-900 px-4 py-6 sm:flex-row sm:gap-5 sm:px-10 sm:py-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          placeholder="Search Anything..."
          className="w-full rounded border-2 px-4 py-2 text-base outline-none sm:text-xl"
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
        />
        <button className="cursor-pointer rounded border-none bg-indigo-500 px-4 py-2 text-base font-semibold outline-none transition-colors ease-in hover:bg-indigo-600 active:scale-95 sm:text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
