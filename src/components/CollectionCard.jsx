import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice.js";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };
  return (
    <div className="relative h-72 overflow-hidden rounded-xl bg-white shadow-lg sm:h-80">
      <a href={item.url} target="_blank" rel="noreferrer" className="block h-full w-full">
        {item.type == "photo" ? (
          <img
            src={item.src}
            className="h-full w-full object-cover object-center"
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            src={item.src}
            className="h-full w-full object-cover object-center"
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="absolute bottom-0 flex w-full items-center justify-between gap-2 px-3 py-4 text-white sm:px-4 sm:py-6"
      >
        <h1 className="h-12 overflow-hidden text-base font-semibold capitalize sm:text-lg">
          {item.title}
        </h1>
        <button
          onClick={removeItem}
          className="cursor-pointer rounded bg-red-600 px-2.5 py-1 text-sm font-medium active:scale-95 sm:px-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
