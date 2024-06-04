import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/story/:id"
          element={<Carousel opencarousel={true} setOpencarousel={""} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
