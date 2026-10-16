import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 bg-emerald-600 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <Link to="/" className="text-xl font-medium sm:text-2xl">
        Media Search
      </Link>
      <div className="flex items-center gap-3 sm:gap-5">
        <Link
          className="rounded border-none bg-gray-800 px-3 py-2 text-sm font-medium active:scale-95 sm:px-4 sm:text-base"
          to="/"
        >
          Search
        </Link>
        <Link
          className="rounded border-none bg-gray-800 px-3 py-2 text-sm font-medium active:scale-95 sm:px-4 sm:text-base"
          to="/collections"
        >
          Collections
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
