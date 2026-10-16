import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection,
  clearToast,
} from "../redux/features/collectionSlice.js";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };
  return (
    <div className="overflow-auto px-4 py-6 sm:px-10">
      {collection.length > 0 ? (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-medium">Your Collection</h2>
          <button
            onClick={clearAll}
            className="cursor-pointer rounded border-none bg-red-600 px-4 py-2 text-base font-medium transition active:scale-95 sm:px-5 sm:text-lg"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="py-10 text-center text-3xl font-medium text-gray-300 sm:text-5xl">
          Collection is Empty
        </h2>
      )}
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collection.map((item, idx) => {
          return <CollectionCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
