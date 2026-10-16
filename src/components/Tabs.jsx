import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice.js";

const Tabs = () => {
  const tabs = ["photos", "GIF"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex flex-wrap gap-3 p-4 sm:p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${
              activeTab == elem ? "bg-blue-600" : "bg-gray-600"
            } cursor-pointer rounded px-4 py-2 text-sm font-semibold uppercase transition-colors ease-in-out active:scale-95 sm:px-5 sm:text-base`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
