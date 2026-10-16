import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { ToastContainer} from "react-toastify";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
