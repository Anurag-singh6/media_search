import React, { useEffect } from "react";
import { fetchPhotos, fecthVideos } from "../api/mediaApi.js";
import {
  setQuery,
  setLoading,
  setActiveTab,
  setError,
  setResults,
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      if (!query) {
        return;
      }
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab == "GIF") {
            let response = await fecthVideos(query);
            data = response.data.data.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title,
              thumbnail: item.file.sm.gif.url,
              src: item.file.hd.gif.url,
              url: item.file.hd.gif.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },

    [query, activeTab, dispatch]
  );
  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1 className="text-xl px-10">Loading...</h1>;
  }
  return (
    <div className="grid w-full grid-cols-1 gap-5 px-4 pb-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item, idx) => {
        return <ResultCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default ResultGrid;
